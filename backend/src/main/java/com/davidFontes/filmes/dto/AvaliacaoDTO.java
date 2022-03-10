package com.davidFontes.filmes.dto;

public class AvaliacaoDTO {
	
	private Long filmeId;
	private String email;
	private Double valor;
	
	public AvaliacaoDTO() {
	}

	public Long getFilmeId() {
		return filmeId;
	}

	public void setFilmeId(Long filmeId) {
		this.filmeId = filmeId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}
	
	
}
