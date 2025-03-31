<!DOCTYPE html>
<html lang="en">

<body>
    <!-- <script>
        var marks=20;

        if (marks>40){
            document.write("Result is pass");
        }

        else{
            document.write("Result is fail");
        }
    </script>     -->

     <!-- <script>
        var cgpa = 7;
        if (cgpa>=9){
            document.write("Internship in Google");
        }

        else if (cgpa>=7 && cgpa<8){
            document.write("Internship in Infosys");
        }

        else if (cgpa<7){
            document.write("Inhouse Internship");
        }

        else if (cgpa>=8 && cgpa<9){
            document.write("Internship in  TCS");
        }
    </script>  -->
<!-- 
    <script>
        var a= 2;
        switch(a){
            case 1:
                document.write("Case 1 is matched");
                break;

            case 2:
                document.write("Case 2 is matched");
                break;
            
            case 3:
                document.write("Case 3 matched");
                break;

            default:
                document.write("No cases matched");
                break;
        }
    </script> -->

    <script>
        //To create a calculate for arithmetic operator using switch
        var n1 = 2;
        var n2 = 4;

        var calc = 4;

        switch(calc){
            case 1:
                document.write("The sum of the given numbers is: ",n1+n2);
                break;

            case 2:
                document.write("The difference of the given numbers is: ",n1-n2);
                break;

                case 3:
                    document.write("The product of the given numbers is: ",n1*n2);
                    break;

                case 4:
                    document.write("The quotient of the given numbers is: ",n1/n2);
                    break;

                case 5:
                    document.write("The power of the first number to the second number is: ",n1**n2);
                    break;

                case 6:
                    document.write("the reminder of the given numbers is: ",n1%n2);
                    break;

                default:
                    document.write("Enter a valid number for arithmetic operators");
                    break;
                }

    </script>
</body>
</html>