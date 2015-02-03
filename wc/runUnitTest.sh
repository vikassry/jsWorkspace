ROOT=`pwd`
RUNTEST=$ROOT/tools/runTest.js

echo '~~~~~~~~~starting '$1' tests~~~~~~~~~~~'	
cd test/unit
for testFile in $1
do
	node $RUNTEST $testFile
done