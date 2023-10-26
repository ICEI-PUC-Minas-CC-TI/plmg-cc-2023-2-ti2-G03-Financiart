package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.javatuples.Pair;
import model.Investments;
import model.User;
import com.google.gson.Gson;

public class InvestmentsDAO extends BaseDAO<Investments> {
	
	public InvestmentsDAO() { 
		super("Investments", (Investments i) -> { return new Investments(); });
		conectar();
	}
	
	public List<Investments> ByUser(int userID) {
		List<Investments> investments = new ArrayList<Investments>();
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			String sql = getQueryBuilder().Select("*").Where(Pair.with("\"user\"", userID+"")).Build();
			ResultSet rs = st.executeQuery(sql);
			
			while(rs.next()) investments.add(entityFactory.apply(null).FromResultSet(rs));
		       
	        
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		} catch (Throwable e) {
			return investments;
		}
		return investments;
	}
}
