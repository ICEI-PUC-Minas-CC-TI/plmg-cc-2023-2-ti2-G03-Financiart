package dao;

import java.security.MessageDigest;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.javatuples.Pair;
import model.Investment;
import model.User;
import model.UserInvestments;

import com.google.gson.Gson;

public class UserInvestmentsDAO extends BaseDAO<UserInvestments> {
	
	public UserInvestmentsDAO() { 
		super("UserInvestments", (UserInvestments i) -> { return new UserInvestments(); });
		conectar();
	}
	
	public List<UserInvestments> byUser(long id) {
		List<UserInvestments> investments = new ArrayList<UserInvestments>();
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
					
			String sql = getQueryBuilder()
					.Select("*")
								.Join("\"Investments\"", Pair.with("\"Investments\".ID", "\"UserInvestments\".investments"))
								.Join("\"User\"", Pair.with("\"User\".ID", "\"UserInvestments\".\"user\""))
								.Where(Pair.with("\"user\"", id+""))
								.Build();
			
			ResultSet rs = st.executeQuery(sql);
			
			while(rs.next()) {
				investments.add(new UserInvestments().FromResultSet(rs));
			}
			
	        st.close();
		} catch (Exception e) {
 			System.err.println(e.getMessage());
		} catch (Throwable e) {
			return investments;
		}
		return investments;
	}
}
