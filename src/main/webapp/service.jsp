<%@page import = "programLibraries.ImageMakerMonocrome"%>
<%@page import = "programLibraries.ImageMakerMonocromeResponse"%>
<%@page  language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>   
      

<% 
	ImageMakerMonocrome mk = new ImageMakerMonocrome();
	ImageMakerMonocromeResponse makeResponse = mk.make(request);

	StringBuilder result = new StringBuilder();
	result.append("{");
	result.append("\"status\": true");
	result.append(",");
	result.append("\"message\":");
	result.append(makeResponse.getMessage());
	result.append(",");
	result.append("\"path\":");
	result.append(makeResponse.getPath());
	result.append("}"); 
	
%> 
<%=result.toString() %>