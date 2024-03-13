package programLibraries;

public class ImageMakerMonocromeResponse {

	private String message;
	private String path;
	
	
	public String getMessage() {
		return String.format("\"%s\"", this.message);
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getPath() {
		return String.format("\"%s\"", this.path);
	}
	public void setPath(String path) {
		this.path = path;
	}
	
}
