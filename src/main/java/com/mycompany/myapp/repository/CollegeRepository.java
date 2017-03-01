package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.College;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the College entity.
 */
@SuppressWarnings("unused")
public interface CollegeRepository extends JpaRepository<College,Long> {

}
