package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.javatuples.Pair;

public class Investments extends Entity<Investments> {

	long user;
	String asset;
	String description;
	String sector;
	String risk;
	String category;

	public String getAsset() { return asset; }
	public void setAsset(String asset) { this.asset = asset; }

	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }

	public String getSector() { return sector; }
	public void setSector(String sector) { this.sector = sector; }

	public String getRisk() { return risk; }
	public void setRisk(String risk) { this.risk = risk; }

	public String getCategory() { return category; }
	public void setCategory(String category) { this.category = category; }
	
	public long getUser() { return user; }
	public void setUser(long user) { this.user = user; }
	
	public Investments() {
		super();
		this.id = 0;
		this.asset = "asset";
		this.description = "description";
		this.sector = "sector";
		this.risk = "risk";
		this.category = "category";
	}
	
	public Investments(int id, String asset, String description, String sector, String risk, String category, long user) {
		super();
		this.id = id;
		this.asset = asset;
		this.description = description;
		this.sector = sector;
		this.risk = risk;
		this.category = category;
		this.user = user;
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public  Pair<String, String>[] InsertFields(){
		ArrayList<Pair<String,String>> list = new ArrayList<>();
		list.add(Pair.with("asset", "'"+ getAsset()+"'"));
		list.add(Pair.with("description", "'"+ getDescription() + "'"));
		list.add(Pair.with("sector", "'"+ getSector() + "'"));
		list.add(Pair.with("risk", "'"+ getRisk() + "'"));
		list.add(Pair.with("category", "'"+ getCategory() + "'"));
		list.add(Pair.with("\"user\"", "'"+ getUser() + "'"));
		return list.toArray(new Pair[0]);
	}

	@Override
	public Investments FromResultSet(ResultSet rs) throws Exception {
		return new Investments(
			rs.getInt("id"),
			rs.getString("asset"),
			rs.getString("description"),
			rs.getString("sector"),
			rs.getString("risk"),
			rs.getString("category"),
			rs.getLong("user")
		);
	}
}