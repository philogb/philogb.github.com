import os
for filename in os.listdir("."):
	if filename[4] == '-':
		os.rename(filename, ''.join(['19', filename[2:]]))

