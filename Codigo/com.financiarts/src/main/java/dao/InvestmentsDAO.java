package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import org.javatuples.Pair;
import model.Investment;
import model.User;
import com.google.gson.Gson;

public class InvestmentsDAO extends BaseDAO<Investment> {
	
	public InvestmentsDAO() { 
		super("Investments", (Investment i) -> { return new Investment(); });
		conectar();
	}
}
