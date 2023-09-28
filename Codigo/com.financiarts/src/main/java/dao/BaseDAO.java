package dao;

import java.sql.*;

import org.javatuples.Pair;

import model.Entity;
import model.Investments;
import service.QueryBuilder;

public class BaseDAO<T extends Entity<T>> extends DAO {

	public BaseDAO() { 
		super("Investments");
		conectar();
	}

	@SuppressWarnings("unchecked")
	public T get(int id) {
		T investments = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = getQueryBuilder().Select("*").Where(Pair.with("id", id+"")).Build();
			ResultSet rs = st.executeQuery(sql);
			investments.FromResultSet(rs);
			
			
	        if(rs.next()) investments = T.FromResultSet(rs); 
	        
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return investments;
	}
	
	@SuppressWarnings("unchecked")
	public boolean insert(T entity) {
		boolean status = false;
		try {
			String sql = getQueryBuilder().Insert(entity.InsertFields()).Build();
			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}

}