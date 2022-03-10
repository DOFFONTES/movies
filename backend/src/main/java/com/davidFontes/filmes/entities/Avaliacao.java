package com.davidFontes.filmes.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity
public class Avaliacao {

	@EmbeddedId
	private AvaliacaoPK id = new AvaliacaoPK();
	private Double valor;
	
	public Avaliacao() {
	}
	
	public void setFilme(Filme filme) {
		id.setFilme(filme);
	}
	
	public void setUsuario(Usuario usuario) {
		id.setUsuario(usuario);
	}

	public AvaliacaoPK getId() {
		return id;
	}

	public void setId(AvaliacaoPK id) {
		this.id = id;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}
	
}
