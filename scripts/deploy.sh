#!/usr/bin/env sh

DIST="../dist/"
TARGET="~/public_html/"
USER="jys2124"

chmod +x "../$JS_PKG_FILE"
# Transfer files
expect -c "
   spawn bash -c \"scp $DIST* $USER@cunix.cc.columbia.edu:$TARGET\"
   expect password: { send $PASSWORD\r }
   expect eof
"
echo "\nThank you for your patronage. Have a nice day.\n"

