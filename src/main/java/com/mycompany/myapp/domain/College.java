package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A College.
 */
@Entity
@Table(name = "college")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class College implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @OneToMany(mappedBy = "college")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Student> enrolls = new HashSet<>();

    @OneToMany(mappedBy = "college")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Professor> have = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public College name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public College address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<Student> getEnrolls() {
        return enrolls;
    }

    public College enrolls(Set<Student> students) {
        this.enrolls = students;
        return this;
    }

    public College addEnrolls(Student student) {
        this.enrolls.add(student);
        student.setCollege(this);
        return this;
    }

    public College removeEnrolls(Student student) {
        this.enrolls.remove(student);
        student.setCollege(null);
        return this;
    }

    public void setEnrolls(Set<Student> students) {
        this.enrolls = students;
    }

    public Set<Professor> getHave() {
        return have;
    }

    public College have(Set<Professor> professors) {
        this.have = professors;
        return this;
    }

    public College addHas(Professor professor) {
        this.have.add(professor);
        professor.setCollege(this);
        return this;
    }

    public College removeHas(Professor professor) {
        this.have.remove(professor);
        professor.setCollege(null);
        return this;
    }

    public void setHave(Set<Professor> professors) {
        this.have = professors;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        College college = (College) o;
        if (college.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, college.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "College{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", address='" + address + "'" +
            '}';
    }
}
