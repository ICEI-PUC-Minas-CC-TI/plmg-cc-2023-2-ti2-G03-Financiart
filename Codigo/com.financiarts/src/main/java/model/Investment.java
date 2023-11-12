package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.javatuples.Pair;

public class Investment extends Entity<Investment> {

	String name;
	String category;
	String sector;
	String risk;
	String yield;
	String reference;
	
	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public String getCategory() { return category; }
	public void setCategory(String category) { this.category = category; }

	public String getSector() { return sector; }
	public void setSector(String sector) { this.sector = sector; }

	public String getRisk() { return risk; }
	public void setRisk(String risk) { this.risk = risk; }

	public String getYield() { return yield; }
	public void setYield(String yield) { this.yield = yield; }

	public String getReference() { return reference; }
	public void setReference(String reference) { this.reference = reference; }
	
	public Investment() { super(); }

	public Investment(int id, String name, String category, String sector, String risk, String yield, String reference) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.sector = sector;
		this.risk = risk;
		this.yield = yield;
		this.reference = reference;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public  Pair<String, String>[] InsertFields(){
		ArrayList<Pair<String,String>> list = new ArrayList<>();
		list.add(Pair.with("name", "'"+ getName()+"'"));
		list.add(Pair.with("category", "'"+ getCategory() + "'"));
		list.add(Pair.with("sector", "'"+ getSector() + "'"));
		list.add(Pair.with("risk", "'"+ getRisk() + "'"));
		list.add(Pair.with("\"yield\"", "'"+ getYield() + "'"));
		list.add(Pair.with("reference", "'"+ getReference() + "'"));
		return list.toArray(new Pair[0]);
	}

	@Override
	public Investment FromResultSet(ResultSet rs) throws Exception {
		return new Investment(
			rs.getInt("id"),
			rs.getString("name"),
			rs.getString("category"),
			rs.getString("sector"),
			rs.getString("risk"),
			rs.getString("yield"),
			rs.getString("reference")
		);
	}
}