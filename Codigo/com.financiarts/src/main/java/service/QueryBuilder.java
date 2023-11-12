package service;

import org.javatuples.*;

public class QueryBuilder{

	StringBuilder stringBuilder; 
	String table;
	
	public QueryBuilder(String table) {
		stringBuilder = new StringBuilder();
		this.table = table;
	}

	public QueryBuilder Select(String... fields) {
		stringBuilder.append("SELECT ");
		for(var i = 0; i < fields.length; i++) {
			stringBuilder.append(fields[i]);
			
			if(fields.length > 1 && i < fields.length-1)
				stringBuilder.append(",");
		}
		stringBuilder.append(" FROM ");
		appendTable();
		stringBuilder.append(" ");
		return this;
	}
	
	public QueryBuilder Join(String table, Pair<String, String>... fields) {
		stringBuilder.append(" JOIN ");
		stringBuilder.append(table);
		stringBuilder.append(" ON ");
		for(var i = 0; i < fields.length; i++) {
			var key = fields[i].getValue(0);
			var value = fields[i].getValue(1);
			stringBuilder.append(key+" = "+value);
			
			if(fields.length > 1 && i < fields.length-1)
				stringBuilder.append(" AND ");
		}
		return this;
	}
	
	public QueryBuilder Where(Pair<String, String>... fields) {
		stringBuilder.append(" WHERE ");
		for(var i = 0; i < fields.length; i++) {
			var key = fields[i].getValue(0);
			var value = fields[i].getValue(1);
			stringBuilder.append(key+"="+value);
			
			if(fields.length > 1 && i < fields.length-1)
				stringBuilder.append(" AND ");
		}
		return this;
	}
	
	public QueryBuilder And(Pair<String, String>... fields) {
		stringBuilder.append(" AND ");
		stringBuilder.append(fields[0].getValue(0));
		stringBuilder.append(" = ");
		stringBuilder.append(fields[0].getValue(1));
		return this;
	}
	
	public QueryBuilder Update() {
		stringBuilder.append("UPDATE");
		return this;
	}
	
	public QueryBuilder Update(Pair<String, String>... fields) {
		stringBuilder.append("UPDATE ");
		stringBuilder.append(getTable() + " SET ");
		for(var i = 0; i < fields.length; i++) {
			var key = fields[i].getValue(0);
			var value = fields[i].getValue(1);
			stringBuilder.append(key);
			stringBuilder.append("=");
			stringBuilder.append(value);
			
			if(fields.length > 1 && i < fields.length -1)
				stringBuilder.append(",");
		}
		return this;
	}
	
	public QueryBuilder Insert(Pair<String, String>... fields) {
		stringBuilder.append("INSERT INTO ");
		stringBuilder.append(getTable() + " (");
		for(var i = 0; i < fields.length; i++) {
			var key = fields[i].getValue(0);
			stringBuilder.append(key);
			
			if(fields.length > 1 && i < fields.length -1)
				stringBuilder.append(",");
		}
		stringBuilder.append(")");
		stringBuilder.append("VALUES (");
		for(var i = 0; i < fields.length; i++) {
			var value = fields[i].getValue(1);
			stringBuilder.append(value);
			
			if(fields.length > 1 && i < fields.length-1)
				stringBuilder.append(",");
		}
		stringBuilder.append(");");
		return this;
	}
	
	public QueryBuilder OrderBy(String... props) {
		 if(props.length == 0) return this;

		 stringBuilder.append("ORDER BY ");
		 for(var i = 0; i < props.length; i++) {
			var value = props[i];
			stringBuilder.append(value);
			
			if(props.length > 1 && i < props.length-1)
				stringBuilder.append(",");
		 }
		 return this;
	}
	
	
	public String Build() {
		return stringBuilder.toString();
	}
	private String getTable() { return "\""+table+"\""; }
	private StringBuilder appendTable() { return stringBuilder.append("\""+table+"\""); }
	
}
