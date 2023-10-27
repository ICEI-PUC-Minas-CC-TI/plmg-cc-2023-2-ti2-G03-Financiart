package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.javatuples.Pair;

import model.Investments;
import model.InvestorProfile;

public class InvestorProfileDAO extends BaseDAO<InvestorProfile> {

	public InvestorProfileDAO() { 
		super("InvestorProfile", (InvestorProfile i) -> { return new InvestorProfile(); });
		conectar();
	}	

}
