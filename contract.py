#!/usr/bin/python3
from sha3 import keccak_256
import random
"""
   addr (str): Hexadecimal address, 40 characters long with 2 characters prefix
   chainid (int): chain id from EIP-155 """
def eth_checksum_encode(addr, chainid=1):
    adopted_eip1191 = [30, 31]
    hash_input = str(chainid) + addr.lower() if chainid in adopted_eip1191 else addr[2:].lower()
    hash_output = keccak_256(hash_input.encode('utf8')).hexdigest()
    aggregate = zip(addr[2:].lower(),hash_output)
    out = addr[:2] + ''.join([c.upper() if int(a,16) >= 8 else c for c,a in aggregate])
    return out