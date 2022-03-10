package com.davidFontes.filmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.davidFontes.filmes.entities.Filme;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long>{

}
