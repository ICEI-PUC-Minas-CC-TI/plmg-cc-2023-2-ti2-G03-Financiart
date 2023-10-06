package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.javatuples.Pair;

import model.InvestorProfile;

public class InvestorProfileDAO extends BaseDAO<InvestorProfile> {

	public InvestorProfileDAO() { 
		super("InvestorProfile", (InvestorProfile i) -> { return new InvestorProfile(); });
		conectar();
	}	
}
