package com.davidFontes.filmes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.davidFontes.filmes.dto.FilmeDTO;
import com.davidFontes.filmes.services.FilmeService;

//@CrossOrigin(origins ="http://localhost:8080/filmes")
@RestController
@RequestMapping("/filmes")
public class FilmeController {
	
	@Autowired
	private FilmeService service;

	@GetMapping
	public Page<FilmeDTO> buscaTodosPaginado(Pageable pageable) {
		
		return service.buscaPorPagina(pageable);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<FilmeDTO> buscaPorId(@PathVariable Long id) {
		
		return ResponseEntity.ok(service.buscaPorId(id));
	}
}