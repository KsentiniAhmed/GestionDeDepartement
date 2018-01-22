package com.soa.app.web.rest;

import com.soa.app.SoaApp;

import com.soa.app.domain.Etudiant;
import com.soa.app.repository.EtudiantRepository;
import com.soa.app.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static com.soa.app.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the EtudiantResource REST controller.
 *
 * @see EtudiantResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SoaApp.class)
public class EtudiantResourceIntTest {

    private static final String DEFAULT_MOYENNE = "AAAAAAAAAA";
    private static final String UPDATED_MOYENNE = "BBBBBBBBBB";

    @Autowired
    private EtudiantRepository etudiantRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restEtudiantMockMvc;

    private Etudiant etudiant;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final EtudiantResource etudiantResource = new EtudiantResource(etudiantRepository);
        this.restEtudiantMockMvc = MockMvcBuilders.standaloneSetup(etudiantResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Etudiant createEntity(EntityManager em) {
        Etudiant etudiant = new Etudiant()
            .moyenne(DEFAULT_MOYENNE);
        return etudiant;
    }

    @Before
    public void initTest() {
        etudiant = createEntity(em);
    }

    @Test
    @Transactional
    public void createEtudiant() throws Exception {
        int databaseSizeBeforeCreate = etudiantRepository.findAll().size();

        // Create the Etudiant
        restEtudiantMockMvc.perform(post("/api/etudiants")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(etudiant)))
            .andExpect(status().isCreated());

        // Validate the Etudiant in the database
        List<Etudiant> etudiantList = etudiantRepository.findAll();
        assertThat(etudiantList).hasSize(databaseSizeBeforeCreate + 1);
        Etudiant testEtudiant = etudiantList.get(etudiantList.size() - 1);
        assertThat(testEtudiant.getMoyenne()).isEqualTo(DEFAULT_MOYENNE);
    }

    @Test
    @Transactional
    public void createEtudiantWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = etudiantRepository.findAll().size();

        // Create the Etudiant with an existing ID
        etudiant.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEtudiantMockMvc.perform(post("/api/etudiants")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(etudiant)))
            .andExpect(status().isBadRequest());

        // Validate the Etudiant in the database
        List<Etudiant> etudiantList = etudiantRepository.findAll();
        assertThat(etudiantList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllEtudiants() throws Exception {
        // Initialize the database
        etudiantRepository.saveAndFlush(etudiant);

        // Get all the etudiantList
        restEtudiantMockMvc.perform(get("/api/etudiants?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(etudiant.getId().intValue())))
            .andExpect(jsonPath("$.[*].moyenne").value(hasItem(DEFAULT_MOYENNE.toString())));
    }

    @Test
    @Transactional
    public void getEtudiant() throws Exception {
        // Initialize the database
        etudiantRepository.saveAndFlush(etudiant);

        // Get the etudiant
        restEtudiantMockMvc.perform(get("/api/etudiants/{id}", etudiant.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(etudiant.getId().intValue()))
            .andExpect(jsonPath("$.moyenne").value(DEFAULT_MOYENNE.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingEtudiant() throws Exception {
        // Get the etudiant
        restEtudiantMockMvc.perform(get("/api/etudiants/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateEtudiant() throws Exception {
        // Initialize the database
        etudiantRepository.saveAndFlush(etudiant);
        int databaseSizeBeforeUpdate = etudiantRepository.findAll().size();

        // Update the etudiant
        Etudiant updatedEtudiant = etudiantRepository.findOne(etudiant.getId());
        // Disconnect from session so that the updates on updatedEtudiant are not directly saved in db
        em.detach(updatedEtudiant);
        updatedEtudiant
            .moyenne(UPDATED_MOYENNE);

        restEtudiantMockMvc.perform(put("/api/etudiants")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedEtudiant)))
            .andExpect(status().isOk());

        // Validate the Etudiant in the database
        List<Etudiant> etudiantList = etudiantRepository.findAll();
        assertThat(etudiantList).hasSize(databaseSizeBeforeUpdate);
        Etudiant testEtudiant = etudiantList.get(etudiantList.size() - 1);
        assertThat(testEtudiant.getMoyenne()).isEqualTo(UPDATED_MOYENNE);
    }

    @Test
    @Transactional
    public void updateNonExistingEtudiant() throws Exception {
        int databaseSizeBeforeUpdate = etudiantRepository.findAll().size();

        // Create the Etudiant

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restEtudiantMockMvc.perform(put("/api/etudiants")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(etudiant)))
            .andExpect(status().isCreated());

        // Validate the Etudiant in the database
        List<Etudiant> etudiantList = etudiantRepository.findAll();
        assertThat(etudiantList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteEtudiant() throws Exception {
        // Initialize the database
        etudiantRepository.saveAndFlush(etudiant);
        int databaseSizeBeforeDelete = etudiantRepository.findAll().size();

        // Get the etudiant
        restEtudiantMockMvc.perform(delete("/api/etudiants/{id}", etudiant.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Etudiant> etudiantList = etudiantRepository.findAll();
        assertThat(etudiantList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Etudiant.class);
        Etudiant etudiant1 = new Etudiant();
        etudiant1.setId(1L);
        Etudiant etudiant2 = new Etudiant();
        etudiant2.setId(etudiant1.getId());
        assertThat(etudiant1).isEqualTo(etudiant2);
        etudiant2.setId(2L);
        assertThat(etudiant1).isNotEqualTo(etudiant2);
        etudiant1.setId(null);
        assertThat(etudiant1).isNotEqualTo(etudiant2);
    }
}
