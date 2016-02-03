#!/usr/bin/env sh

TARGET="~/public_html/"
USER="jys2124"

chmod +x "../dist/\*.js"

# Transfer files
expect -c "
   spawn bash -c \"scp ../dist/\* $USER@cunix.cc.columbia.edu:$TARGET\"
   expect password: { send $PASSWORD\r }
   expect eof
"

echo "\nThank you for your patronage. Have a nice day.\n"

