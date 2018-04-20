package com.ncs.smms.face.authority;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.PrintWriter;

import javax.imageio.ImageIO;

import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Results;

import com.ncs.smms.face.BasicAction;
import com.ncs.smms.util.VerifyCode;

/**
 * 验证码专用action
*@Author qy
*@version 2018年2月11日 上午11:30:45
*/
@Namespace("/verifyCode")
@ParentPackage("smms")
@InterceptorRefs( { @InterceptorRef("annotationInterceptor"), @InterceptorRef("simpleStack")})
@Results({})
public class VerifyCodeAction extends BasicAction {
	
	private String codeValue;  //接受参数
	
	public String getCodeValue() {
		return codeValue;
	}

	public void setCodeValue(String codeValue) {
		this.codeValue = codeValue;
	}

	/**
	 * 生成验证码
	 * @Author qy
	 */
	@Action("getVerifyCode")
	public void getVerifyCode(){
		VerifyCode vc = new VerifyCode(); 		
		//response.setHeader()下载中文文件名乱码问题 
		response.setHeader("Cache-Control", "no-cache"); 
		//设置发送到客户端的响应的内容类型，此时响应还没有提交
		response.setContentType("image/jpeg");
		//将图片加载到内存中
		BufferedImage bim = vc.getImage();  
		//把验证码输出到客服端
		try {
			ImageIO.write(bim, "JPEG", response.getOutputStream());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  
		//获取验证码的值
		String verifycode = vc.getText();
		System.err.println("->>>>>>>>>>>>"+verifycode);
		//将验证码放入session
		session.setAttribute("verifyCode", verifycode); 
	}	
	
	/**
	 * 检查验证码
	 * @Author qy
	 */
	@Action("checkVerifyCode")
	public void checkVerifyCode(){
		Boolean bool = false;
		//获的session中的验证码
		String verifyCode = (String) session.getAttribute("verifyCode");
//		System.err.println("<<<<<<<<<<<<<<<<-"+verifyCode);
		//比较
		if (verifyCode.equalsIgnoreCase(codeValue)) {
			bool = true;
		};
		returnJson(bool);
	}
	
}
