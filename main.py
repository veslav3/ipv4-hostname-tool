# Doing it in python failed (on linux)

import socket   
hostname = socket.gethostname()   
IPAddr = socket.gethostbyname(hostname)   
print("Your Computer Name is:" + hostname)   
print("Your Computer IP Address is:" + IPAddr)   

# import fileinput

# with fileinput.FileInput('./App.tsx', inplace=True, backup='.bak') as file:
#     for line in file:
#         print(line.replace(localhost, IPAddr))