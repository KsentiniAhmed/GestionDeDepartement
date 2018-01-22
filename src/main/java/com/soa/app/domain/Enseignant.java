package com.soa.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Enseignant.
 */
@Entity
@Table(name = "enseignant")
public class Enseignant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "iduser")
    private Long iduser;

    @OneToMany(mappedBy = "enseignant")
    @JsonIgnore
    private Set<Matiere> enseigners = new HashSet<>();

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

    public Long getIduser() {
        return iduser;
    }

    public Enseignant iduser(Long iduser) {
        this.iduser = iduser;
        return this;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    public Set<Matiere> getEnseigners() {
        return enseigners;
    }

    public Enseignant enseigners(Set<Matiere> matieres) {
        this.enseigners = matieres;
        return this;
    }

    public Enseignant addEnseigner(Matiere matiere) {
        this.enseigners.add(matiere);
        matiere.setEnseignant(this);
        return this;
    }

    public Enseignant removeEnseigner(Matiere matiere) {
        this.enseigners.remove(matiere);
        matiere.setEnseignant(null);
        return this;
    }

    public void setEnseigners(Set<Matiere> matieres) {
        this.enseigners = matieres;
    }

    public User getUser() {
        return user;
    }

    public Enseignant user(User user) {
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
        Enseignant enseignant = (Enseignant) o;
        if (enseignant.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), enseignant.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Enseignant{" +
            "id=" + getId() +
            ", iduser=" + getIduser() +
            "}";
    }
}
