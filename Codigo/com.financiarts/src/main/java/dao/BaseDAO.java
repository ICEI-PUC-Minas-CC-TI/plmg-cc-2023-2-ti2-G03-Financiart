package dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

import org.javatuples.Pair;

import model.Entity;
import model.Produto;
 
public class BaseDAO<T extends Entity<T>> extends DAO {

	Function<T, T> entityFactory;
	
	public BaseDAO(String table, Function<T,T> entityFactory) { 
		super(table);
		conectar();
		this.entityFactory = entityFactory; 
	}
	
	@SuppressWarnings("unchecked")
	public T get(int id) {
		T investments = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = getQueryBuilder().Select("*").Where(Pair.with("id", id+"")).Build();
			ResultSet rs = st.executeQuery(sql);
			
	        if(rs.next()) 
	        	investments = entityFactory.apply(null).FromResultSet(rs); 
	        
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		} catch (Throwable e) {
			return investments;
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
	
	public boolean delete(int id) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			st.executeUpdate("DELETE FROM "+ table +" WHERE id = " + id);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	@SuppressWarnings("unchecked")
	public boolean update(T entity) {
		boolean status = false;
		try {  
			
			String sql = getQueryBuilder()
								.Update(entityFactory.apply(null).InsertFields())
								.Where(Pair.with("id", entity.getId()+""))
								.Build();

			PreparedStatement st = conexao.prepareStatement(sql);
			
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	public List<T> AllBy(String orderBy) {
		List<T> produtos = new ArrayList<T>();
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			String sql = getQueryBuilder().Select("*").OrderBy(orderBy).Build();
					
			ResultSet rs = st.executeQuery(sql);
			
	        while(rs.next()) produtos.add(entityFactory.apply(null).FromResultSet(rs));
	        
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		} catch (Throwable e) {
			return produtos;
		}
		return produtos;
	}
	
	

}