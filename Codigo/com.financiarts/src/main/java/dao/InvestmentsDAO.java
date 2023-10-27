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
}
