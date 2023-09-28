package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.javatuples.Pair;

import model.Investments;
import model.User;

public class InvestmentsDAO extends DAO {

	public InvestmentsDAO() { 
		super("Investments");
		conectar();
	}

	@SuppressWarnings("unchecked")
	public Investments get(int id) {
		Investments investments = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = getQueryBuilder().Select("*").Where(Pair.with("id", id+"")).Build();
			ResultSet rs = st.executeQuery(sql);

	        if(rs.next()) investments = new Investments().FromResultSet(rs);
	        
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return investments;
	}
	
	@SuppressWarnings("unchecked")
	public boolean insert(Investments investments) {
		boolean status = false;
		try {
			String sql = getQueryBuilder().Insert(investments.InsertFields()).Build();
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
