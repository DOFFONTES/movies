package com.davidFontes.filmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.davidFontes.filmes.entities.Avaliacao;
import com.davidFontes.filmes.entities.AvaliacaoPK;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, AvaliacaoPK>{

}
