package com.soa.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Etudiant.
 */
@Entity
@Table(name = "etudiant")
public class Etudiant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "moyenne")
    private String moyenne;

    @OneToMany(mappedBy = "etudiant")
    @JsonIgnore
    private Set<Note> associers = new HashSet<>();

    @ManyToOne
    private Section etudier;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMoyenne() {
        return moyenne;
    }

    public Etudiant moyenne(String moyenne) {
        this.moyenne = moyenne;
        return this;
    }

    public void setMoyenne(String moyenne) {
        this.moyenne = moyenne;
    }

    public Set<Note> getAssociers() {
        return associers;
    }

    public Etudiant associers(Set<Note> notes) {
        this.associers = notes;
        return this;
    }

    public Etudiant addAssocier(Note note) {
        this.associers.add(note);
        note.setEtudiant(this);
        return this;
    }

    public Etudiant removeAssocier(Note note) {
        this.associers.remove(note);
        note.setEtudiant(null);
        return this;
    }

    public void setAssociers(Set<Note> notes) {
        this.associers = notes;
    }

    public Section getEtudier() {
        return etudier;
    }

    public Etudiant etudier(Section section) {
        this.etudier = section;
        return this;
    }

    public void setEtudier(Section section) {
        this.etudier = section;
    }

    public User getUser() {
        return user;
    }

    public Etudiant user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Etudiant etudiant = (Etudiant) o;
        if (etudiant.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), etudiant.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Etudiant{" +
            "id=" + getId() +
            ", moyenne='" + getMoyenne() + "'" +
            "}";
    }
}
