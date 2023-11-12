package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.javatuples.Pair;

public class UserInvestments extends Entity<UserInvestments> {

	double amount;
	Investment investments;

	public Investment getInvestments() { return investments; }
	public void setInvestments(Investment investments) { this.investments = investments; }
	
	public double getAmount() { return amount; }
	public void setAmount(double amount) { this.amount = amount; }
	
	@Override
	public Pair<String, String>[] InsertFields() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public UserInvestments FromResultSet(ResultSet rs) throws Throwable {
		var userInvestment = new UserInvestments();
		userInvestment.setAmount(rs.getDouble("quantity"));
		userInvestment.setInvestments(new Investment().FromResultSet(rs));
		return userInvestment;
	}
	
}