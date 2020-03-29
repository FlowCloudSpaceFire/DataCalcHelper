package ncl.calc;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="center")
public class center {
	
	@RequestMapping(value="home.html")
	public String goHome(HttpServletRequest request) {
		return "forward:/index.jsp";
	}
	
	@RequestMapping(value="record.html")
	public String goRecordStorage(HttpServletRequest request) {
		return "forward:/recordCalc.jsp";
	}
	
	@RequestMapping(value="bandwidth.html")
	public String goBandwidth(HttpServletRequest request) {
		return "forward:/bandwidthCalc.jsp";
	}
	
	@RequestMapping(value="ups.html")
	public String goUps(HttpServletRequest request) {
		return "forward:/upsCalc.jsp";
	}
	
	@RequestMapping(value="screen.html")
	public String goScreen(HttpServletRequest request) {
		return "forward:/screenCalc.jsp";
	}
	
	@RequestMapping(value="focus.html")
	public String goCameraFocus(HttpServletRequest request) {
		return "forward:/focusCalc.jsp";
	}
	
	@RequestMapping(value="ip.html")
	public String goIp(HttpServletRequest request) {
		return "forward:/ipCalc.jsp";
	}
}
