package com.davidFontes.filmes.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.davidFontes.filmes.dto.FilmeDTO;
import com.davidFontes.filmes.entities.Filme;
import com.davidFontes.filmes.repositories.FilmeRepository;

@Service
public class FilmeService {

	@Autowired
	private FilmeRepository repo;
	
	public List<FilmeDTO> buscaTodos(){	
		List<FilmeDTO> lista = new ArrayList<>();
		List<Filme> obj = repo.findAll();
		lista = obj.stream().map(x -> new FilmeDTO(x)).collect(Collectors.toList());
		return lista;
	}
	
	@Transactional(readOnly = true)
	public Page<FilmeDTO> buscaPorPagina(Pageable pageable){	
		Page<Filme> obj = repo.findAll(pageable);
		Page<FilmeDTO> lista = obj.map(x -> new FilmeDTO(x));
		return lista;
	}
	
	public FilmeDTO buscaPorId(Long id) {
		Filme obj = repo.findById(id).get();
		FilmeDTO filme = new FilmeDTO(obj);
		
		return filme;
	}
	
	public Filme inseri(Filme filme) {
		return repo.save(filme);
	}
	
	
}
