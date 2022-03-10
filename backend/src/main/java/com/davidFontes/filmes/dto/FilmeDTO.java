package com.davidFontes.filmes.dto;

import com.davidFontes.filmes.entities.Filme;

public class FilmeDTO {

	private Long id;
	private String titulo;
	private Double avaliacao;
	private Integer contador;
	private String imagem;
	
	public FilmeDTO() {
	}

	public FilmeDTO(Long id, String titulo, Double avaliacao, Integer contador, String imagem) {
		this.id = id;
		this.titulo = titulo;
		this.avaliacao = avaliacao;
		this.contador = contador;
		this.imagem = imagem;
	}
	
	public FilmeDTO(Filme filme) {
		this.id = filme.getId();
		this.titulo = filme.getTitulo();
		this.avaliacao = filme.getAvaliacao();
		this.contador = filme.getContador();
		this.imagem = filme.getImagem();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Double getAvaliacao() {
		return avaliacao;
	}

	public void setAvaliacao(Double avaliacao) {
		this.avaliacao = avaliacao;
	}

	public Integer getContador() {
		return contador;
	}

	public void setContador(Integer contador) {
		this.contador = contador;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
}
