package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.javatuples.Pair;

import model.User;

public class UserDAO extends DAO {

	public UserDAO() { 
		super("User");
		conectar();
	}

	@SuppressWarnings("unchecked")
	public User get(int id) {
		User user = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = getQueryBuilder()
							.Select("*")
							.Where(Pair.with("id", id+""))
							.Build();
				
			ResultSet rs = st.executeQuery(sql);	
	        if(rs.next()){           
	        	user = new User(
	    			rs.getInt("id"),
	    			rs.getString("cpf"),
	    			rs.getString("sex"),
	    			rs.getDate("birth"),
	    			rs.getString("email"),
	    			rs.getString("password")
	        	);
	        }
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return user;
	}
	
	@SuppressWarnings("unchecked")
	public boolean insert(User user) {
		boolean status = false;
		try {
			String sql = getQueryBuilder()
				.Insert(
						Pair.with("cpf", "'"+user.getCpf()+"'"),
						Pair.with("sex", "'"+user.getSex() + "'"),
						Pair.with("birth", "'"+user.getBirth() + "'"),
						Pair.with("email", "'"+user.getEmail() + "'"),
						Pair.with("password", "'"+user.getPassword() + "'")
				)
				.Build();
	
			PreparedStatement st = conexao.prepareStatement(sql);
		 //   st.setTimestamp(1, Timestamp.valueOf(user.getDataFabricacao()));
		//	st.setDate(2, Date.valueOf(user.getDataValidade()));
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}

	
}
