x = 5
y = "hello #{x}"

console.log y

fun = () ->
	x = 3
	b = 4
	z = x + b
	console.log z	
fun ''

fact = (number) ->
	if number <=0
		return 1;
	f = number * fact(number-1)
	return f
console.log fact(5)