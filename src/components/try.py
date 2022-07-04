from ast import arg
import threading
import time

def cal_square(num):
    print("FOR SQUARE.................")
    print("Square is : ",num*num)
    time.sleep(3)

def cal_cube(num):
    print("FOR CUBE............")
    print("Square is : ",num*num*num)


start_time = time.time()

t1= threading.Thread(target=cal_square,args=(3,))
t2 = threading.Thread(target=cal_cube,args=(3,))

t1.start()
t2.start()

# t1.join()
# t2.join()

print("Total time taken in parralel: ",time.time()-start_time)

start_time2 = time.time()
cal_square(3)
cal_cube(3)
print("Total time taken in sequencial: ",time.time()-start_time2)