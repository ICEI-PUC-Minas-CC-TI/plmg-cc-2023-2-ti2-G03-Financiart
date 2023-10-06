package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.javatuples.Pair;

import model.Entity;
import model.User;

public class UserDAO extends BaseDAO<User> {

	public UserDAO() { 
		super("User", (User u) -> { return new User(); });
		conectar();
	}	
}
