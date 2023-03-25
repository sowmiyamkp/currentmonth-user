var c1=parseInt(prompt("enter the month"));
var a=new Date();
a.setMonth(c1);
var b=a.getMonth();

if(b<3)
{
	document.write("Fall");
}
else if (b<=c1 && b<7)
{
	document.write("Summer");
}
else if (7<=b && b<11)
{
	document.write("Winter");
}
else
	{
	document.write("Enter a valid month");
}