
        //slideflow-code begin ////////////////////////////////////////////////////////////////////

		function gesamt1(){
				if (document.getElementById("gesamt1").className == "icon_color_gesamt") {
						document.getElementById("gesamt1").className +=" checked";
						switchon("04");addtoarray("04");
						switchon("05");addtoarray("05");
						switchon("06");addtoarray("06");
						switchon("07");addtoarray("07");
						switchon("08");addtoarray("08");
						switchon("09");addtoarray("09");
						switchon("10");addtoarray("10");
						switchon("11");addtoarray("11");
						switchon("12");addtoarray("12");
				}
				else {
						document.getElementById("gesamt1").className ="icon_color_gesamt";	
						switchoff("04");switchoff("04");
						switchoff("05");switchoff("05");
						switchoff("06");switchoff("06");
						switchoff("07");switchoff("07");
						switchoff("08");switchoff("08");
						switchoff("09");switchoff("09");
						switchoff("10");switchoff("10");
						switchoff("11");switchoff("11");
						switchoff("12");switchoff("12");
			
				}	
				sendglobalvalue("slideflow", slideflow);

		}
		
		function gesamt2(){
				if (document.getElementById("gesamt2").className == "icon_color_gesamt") {
						document.getElementById("gesamt2").className +=" checked";
						switchon("13");addtoarray("13");
						switchon("14");addtoarray("14");
						switchon("17");addtoarray("17");
						switchon("18");addtoarray("18");
						switchon("19");addtoarray("19");
						switchon("20");addtoarray("20");
						switchon("21");addtoarray("21");
						switchon("22");addtoarray("22");
						switchon("26");addtoarray("26");
						switchon("31");addtoarray("31");
						switchon("32");addtoarray("32");
				}
				else {
						document.getElementById("gesamt2").className ="icon_color_gesamt";	
						switchoff("13");removefromarray("13");
						switchoff("14");removefromarray("14");
						switchoff("17");removefromarray("17");
						switchoff("18");removefromarray("18");
						switchoff("19");removefromarray("19");
						switchoff("20");removefromarray("20");
						switchoff("21");removefromarray("21");
						switchoff("22");removefromarray("22");
						switchoff("26");removefromarray("26");
						switchoff("31");removefromarray("31");
						switchoff("32");removefromarray("32");
				}
            sendglobalvalue("slideflow", slideflow);
		}
		
		function gesamt3(){
				if (document.getElementById("gesamt3").className == "icon_color_gesamt") {
						document.getElementById("gesamt3").className +=" checked";
						switchon("33");addtoarray("33");
						switchon("34");addtoarray("34");
				}
				else {
						document.getElementById("gesamt3").className ="icon_color_gesamt";	
						switchoff("33");removefromarray("33");	
						switchoff("34");removefromarray("34");	
				}
            sendglobalvalue("slideflow", slideflow);
		}

		function gesamt4(){
				if (document.getElementById("gesamt4").className == "icon_color_gesamt") {
						document.getElementById("gesamt4").className +=" checked";
						switchon("35");addtoarray("35");
						switchon("36");addtoarray("36");
						switchon("37");addtoarray("37");
						switchon("38");addtoarray("38");
				}
				else {
						document.getElementById("gesamt4").className ="icon_color_gesamt";	
						switchoff("35");removefromarray("35");
						switchoff("36");removefromarray("36");
						switchoff("37");removefromarray("37");
						switchoff("38");removefromarray("38");	
				}
            sendglobalvalue("slideflow", slideflow);
		}

		function gesamt5(){
				if (document.getElementById("gesamt5").className == "icon_color_gesamt") {
						document.getElementById("gesamt5").className +=" checked";
						switchon("39");addtoarray("39");
						switchon("40");addtoarray("40");
					    switchon("41");addtoarray("41");
				}
				else {
						document.getElementById("gesamt5").className ="icon_color_gesamt";	
						switchoff("39");switchoff("39");	
						switchoff("40");switchoff("40");	
						switchoff("41");switchoff("41");	
				}
            sendglobalvalue("slideflow", slideflow);
		}	
		
		
        function checkme(id) {
            if (document.getElementById(id).className == "slide_link") {
                switchon(id)
                addtoarray(id);
            }
            else {
                switchoff(id)
                removefromarray(id);
            }
            sendglobalvalue("slideflow", slideflow);
        }
        function switchon(id) {
            if (id.length > 0 && id!="03") { document.getElementById(id).className += " checked"; 
            addtoarray(id);
                                           }
        }
        function switchoff(id) {
            if (id.length > 0 && id!="03") { document.getElementById(id).className = "slide_link"; 
            removefromarray(id);}
        }
        function addtoarray(id) {
            idn = parseInt(id);
            slideflow[idn] = id;
        }
        function removefromarray(id) {
            idn = parseInt(id);
            slideflow[idn] = "";
        }
        function cleararray() {
			slideflow.forEach(element => switchoff(element));
            slideflow.forEach(element => removefromarray(element));
            sendglobalvalue("slideflow", slideflow);
			document.getElementById("gesamt1").className ="icon_color_gesamt";	
			document.getElementById("gesamt2").className ="icon_color_gesamt";	
			document.getElementById("gesamt3").className ="icon_color_gesamt";	
			document.getElementById("gesamt4").className ="icon_color_gesamt";	
			document.getElementById("gesamt5").className ="icon_color_gesamt";	
			document.getElementById("gesamt6").className ="icon_color_gesamt";	
			document.getElementById("gesamt7").className ="icon_color_gesamt";	
        }
        function nextslideinflow() {
            sendglobalvalue("slideflowisactive", true);
            fallback = "03";
            from = globalvariables["returntoid"];
            nextslide = "";
            slideflow.forEach(element => checkifhigher(element, from));
            if (nextslide.length < 2) { nextslide = fallback };
            if (parseInt(nextslide) < parseInt(from)) { nextslide = fallback;sendglobalvalue("slideflowisactive", "false");}
            veevaNavigateSceneWithID(nextslide);
        }
        function checkifhigher(id, from) {
            if (id.length > 0 && nextslide.length < 1) {
                if (parseInt(id) > parseInt(from))
                    nextslide = id;
            }
        }
		function checkiflower(id, from) {
            if (id.length > 0 && previousslide.length < 1) {
                if (parseInt(id) < parseInt(from))
                    previousslide = id;
            }
        }
		//slideflow-code end ////////////////////////////////////////////////////////////////////