package com.davidFontes.filmes.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.davidFontes.filmes.dto.AvaliacaoDTO;
import com.davidFontes.filmes.dto.FilmeDTO;
import com.davidFontes.filmes.entities.Avaliacao;
import com.davidFontes.filmes.entities.Filme;
import com.davidFontes.filmes.entities.Usuario;
import com.davidFontes.filmes.repositories.AvaliacaoRepository;
import com.davidFontes.filmes.repositories.FilmeRepository;
import com.davidFontes.filmes.repositories.UsuarioRepository;

@Service
public class AvaliacaoService {
	
	@Autowired
	private AvaliacaoRepository avaliacaoRepo;
	
	@Autowired
	private UsuarioRepository usuarioRepo;
	
	@Autowired
	private FilmeRepository filmeRepo;
	
	@Transactional
	public FilmeDTO salvaAvaliacao(AvaliacaoDTO dto) {

		Usuario usuario = usuarioRepo.findByEmail(dto.getEmail());
		
		if(usuario == null) {
			usuario = new Usuario();
			usuario.setEmail(dto.getEmail());
			usuario = usuarioRepo.saveAndFlush(usuario);
		}
		
		Filme filme = filmeRepo.findById(dto.getFilmeId()).get();
		
		Avaliacao avaliacao = new Avaliacao();
		avaliacao.setUsuario(usuario);
		avaliacao.setFilme(filme);
		avaliacao.setValor(dto.getValor());
		
		avaliacao = avaliacaoRepo.saveAndFlush(avaliacao);
		
		double soma = 0.0;
		
		for(Avaliacao a: filme.getAvaliacoes()) {
			soma += a.getValor();
		}
		
		double media = soma/filme.getAvaliacoes().size();
		
		filme.setAvaliacao(media);
		filme.setContador(filme.getAvaliacoes().size());
		
		filme = filmeRepo.save(filme);
		
		return new FilmeDTO(filme);
		
	}

}
