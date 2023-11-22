package model;

import java.security.*;
import java.sql.Date;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.javatuples.Pair;

public class User extends Entity<User> {

	String cpf;
	String sex;
	Date birth;
	String email;
	String password;
	boolean isPremium;

	public String getCpf() { return cpf; }
	public void setCpf(String cpf) { this.cpf = cpf;}

	public String getSex() { return sex; }
	public void setSex(String sex) { this.sex = sex; }

	public Date getBirth() { return birth; }
	public void setBirth(Date birth) { this.birth = birth; }

	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }

	public String getPassword() { return password; }
	public void setPassword(String password) { this.password = password; }
	
	public boolean getIsPremium() { return isPremium; }
	public void setIsPremium(boolean isPremium) { this.isPremium = isPremium; }


	public User(int id, String cpf, String sex, Date birth, String email, String password, boolean isPremium) {
		this.id = id;
		this.cpf = cpf;
		this.sex = sex;
		this.birth = birth;
		this.email = email;
		this.password = password;
		this.isPremium = isPremium;
	}

	public User() {}
	
	@Override
	@SuppressWarnings("unchecked")
	public Pair<String, String>[] InsertFields(){
		try {
			var password = getPassword();
			MessageDigest m = MessageDigest.getInstance("MD5");
			m.update(password.getBytes(), 0, password.length());
			
			ArrayList<Pair<String,String>> list = new ArrayList<>();
			list.add(Pair.with("cpf", "'"+ getCpf() + "'"));
			list.add(Pair.with("sex", "'"+ getSex() + "'"));
			list.add(Pair.with("birth", "'"+ getBirth() + "'"));
			list.add(Pair.with("email", "'"+ getEmail() + "'"));
			list.add(Pair.with("password", "'"+ password + "'"));
			return list.toArray(new Pair[0]);
		} catch (NoSuchAlgorithmException ex) {
			return null;
		}
	}

	@Override
	public User FromResultSet(ResultSet rs) throws Exception {
		return new User(
			rs.getInt("id"),
			rs.getString("cpf"),
			rs.getString("sex"),
			rs.getDate("birth"),
			rs.getString("email"),
			rs.getString("password"),
			rs.getBoolean("ispremium")
		);
		
	}
	
}
