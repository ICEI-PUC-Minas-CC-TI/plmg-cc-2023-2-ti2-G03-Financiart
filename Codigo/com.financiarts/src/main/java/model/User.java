package model;

import java.sql.Date;

public class User {
	int id;
	String cpf;
	String sex;
	Date birth;
	String email;
	String password;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Date getBirth() {
		return birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User(int id, String cpf, String sex, Date birth, String email, String password) {
		this.id = id;
		this.cpf = cpf;
		this.sex = sex;
		this.birth = birth;
		this.email = email;
		this.password = password;
	}

	public User() {
		this.id = 0;
		this.cpf = "123123123";
		this.sex = "O";
		this.birth = new Date(100);
		this.email = "test";
		this.password = "test";
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", cpf=" + cpf + ", sex=" + sex + ", birth=" + birth + ", email=" + email
				+ ", password=" + password + "]";
	}	
}
