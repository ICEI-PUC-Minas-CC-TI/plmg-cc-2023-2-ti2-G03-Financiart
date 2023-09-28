package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.javatuples.Pair;

import model.InvestorProfile;

public class InvestorProfileDAO extends DAO {

	public InvestorProfileDAO() { 
		super("InvestorProfile");
		conectar();
	}

	@SuppressWarnings("unchecked")
	public InvestorProfile get(int id) {
		InvestorProfile investorProfile = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			
			String sql = getQueryBuilder()
							.Select("*")
							.Where(Pair.with("id", id+""))
							.Build();
				
			ResultSet rs = st.executeQuery(sql);	
	        if(rs.next()){           
	        	investorProfile = new InvestorProfile(
	    			rs.getInt("id"),
	    			rs.getString("knowledge"),
	    			rs.getDouble("salary"),
	    			rs.getString("objective"),
	    			rs.getString("risk"),
	    			rs.getString("focus")
	        	);
	        }
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return investorProfile;
	}
	
	@SuppressWarnings("unchecked")
	public boolean insert(InvestorProfile investorProfile) {
		boolean status = false;
		try {
			String sql = getQueryBuilder()
				.Insert(
						Pair.with("knowledge", "'"+investorProfile.getKnowledge()+"'"),
						Pair.with("salary", "'"+investorProfile.getSalary() + "'"),
						Pair.with("objective", "'"+investorProfile.getObjective() + "'"),
						Pair.with("risk", "'"+investorProfile.getRisk() + "'"),
						Pair.with("focus", "'"+investorProfile.getFocus() + "'")
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
