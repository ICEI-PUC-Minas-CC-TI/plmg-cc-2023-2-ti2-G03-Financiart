package model;

import java.security.*;
import java.sql.Date;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.javatuples.Pair;

public class Transaction extends Entity<Transaction> {

	int user;
	String description;
	boolean revenue;
	double value;
	String category;
	Date date;
	
	public Date getDate() { return date; }
	public void setDate(Date date) { this.date = date;}
	
	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }

	public boolean isRevenue() { return revenue; }
	public void setRevenue(boolean revenue) { this.revenue = revenue; }

	public double getValue() { return value; }
	public void setValue(double value) { this.value = value; }

	public String getCategory() { return category; }
	public void setCategory(String category) { this.category = category; }
	
	public int getUser() { return user; }
	public void setUser(int user) { this.user= user; }

	public Transaction() { super(); }
	public Transaction(int id, String description, boolean revenue, double value, String category, Date date, int user) {
		super();
		this.id = id;
		this.description = description;
		this.revenue = revenue;
		this.value = value;
		this.category = category;
		this.date = date;
		this.user = user;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public Pair<String, String>[] InsertFields(){
		ArrayList<Pair<String,String>> list = new ArrayList<>();
		list.add(Pair.with("\"user\"", "'"+ getUser() + "'"));
		list.add(Pair.with("description", "'"+ getDescription() + "'"));
		list.add(Pair.with("revenue", "'"+ isRevenue() + "'"));
		list.add(Pair.with("value", "'"+ getValue() + "'"));
		list.add(Pair.with("category", "'"+ getCategory() + "'"));
		list.add(Pair.with("date", "'"+ getDate() + "'"));
		return list.toArray(new Pair[0]);
	}

	@Override
	public Transaction FromResultSet(ResultSet rs) throws Exception {
		return new Transaction(
			rs.getInt("id"),
			rs.getString("description"),
			rs.getBoolean("revenue"),
			rs.getDouble("value"),
			rs.getString("category"),
			rs.getDate("date"),
			rs.getInt("user")
		);
		
	}
	
}
