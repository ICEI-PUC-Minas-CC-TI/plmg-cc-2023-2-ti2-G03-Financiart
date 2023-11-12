package dao;

import java.security.MessageDigest;
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
	
	public User login(String email, String unhashedPassword) {
		User user = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
		
			var password = unhashedPassword;
			MessageDigest m = MessageDigest.getInstance("MD5");
			
			String sql = getQueryBuilder()
								.Select("*")
								.Where(Pair.with("email", "'"+email+"'"))
								.And(Pair.with("password", "'"+password+"'"))
								.Build();
			ResultSet rs = st.executeQuery(sql);
			
	        if(rs.next()) 
	        	user = entityFactory.apply(null).FromResultSet(rs); 
	        
	        st.close();
		} catch (Exception e) {
 			System.err.println(e.getMessage());
		} catch (Throwable e) {
			return user;
		}
		return user;
	}
	
}
