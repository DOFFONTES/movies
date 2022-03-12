package com.davidFontes.filmes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.davidFontes.filmes.dto.AvaliacaoDTO;
import com.davidFontes.filmes.dto.FilmeDTO;
import com.davidFontes.filmes.services.AvaliacaoService;

//@CrossOrigin(origins ="http://localhost:8080/**")
@RestController
@RequestMapping(value = "/avaliacoes")
public class AvaliacaoController {
	
	@Autowired
	private AvaliacaoService service;

	@PutMapping
	public FilmeDTO salvaAvaliacao(@RequestBody AvaliacaoDTO dto) {
		return service.salvaAvaliacao(dto);
	}
}
