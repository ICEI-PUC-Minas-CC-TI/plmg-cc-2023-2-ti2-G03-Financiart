package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.javatuples.Pair;

import model.Investment;
import model.InvestorProfile;
import model.Transaction;

public class TransactionDAO extends BaseDAO<Transaction> {

	public TransactionDAO() { 
		super("Transaction", (Transaction i) -> { return new Transaction(); });
		conectar();
	}	

}
