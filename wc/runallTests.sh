ROOT=`pwd`
RUNTEST=$ROOT/tools/runTest.js
function runFolderTests {
	echo '~~~~~~~~~starting '$1' tests~~~~~~~~~~~'	
	cd test/$1
	for testFile in *Test.js
	do
		node $RUNTEST $testFile
	done
	cd $ROOT
}

runFolderTests 'unit'
runFolderTests 'integration'