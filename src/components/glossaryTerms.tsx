export const glossaryTerms = [
  {
    term: "A/D converter",
    definition:
      "A  hardware device that reads an analog signal—typically a voltage—compares it to a reference signal, and converts the resulting percentage to a digital value. Short for analog-to-digital converter. Abbreviated ADC. The reference signal represents 100%. An n-bit A/D converter has a maximum value of 2n - 1 and a resolution of Vref/2n",
  },
  {
    term: "ABEL",
    definition:
      "A design language for creating the logic to be implemented in a simple programmable logic device. Short for Advanced Boolean Expression Language. Programs created with ABEL are compiled into the binary pattern necessary to create the PLD with a device programmer.",
  },
  {
    term: "Active Low",
    definition:
      "Denotes a logic device or circuit where a logic 1 is a lower voltage than a logic 0.",
  },
  {
    term: "Address Bus",
    definition:
      "A set of wires connected to a processor and all of the peripherals with which it communicates, for the purpose of selecting a specific memory location or register within a particular peripheral. If the address bus contains n electrical lines, the processor can address up to 2n unique locations. Address decoding logic between the processor and the devices connected to the bus select the proper device, typically based on the uppermost bits.",
  },
  {
    term: "Aliasing",
    definition:
      "1. Allowing one memory location or register to be accessible at more than one address. Aliasing is a result of address decoding and often happens with peripheral control and status registers. For example, if an I/O device has just four byte-wide registers but is mapped into a 256-byte region of memory, aliasing will occur. In this case, the same four registers can be read or written at any of 64 different locations within that region.\n2. An effect, because of undersampling, where a time-varying signal appears to be running, at a much lower frequency than it really is. Aliasing is a common effect of using a digital oscilloscope to view fast waveforms, like clocks. If the scope's sampling rate is low, the perfect 20-MHz clock could appear to be oscillating at 10 kHz.\n3. Different variables reference the same physical memory location.",
  },
  {
    term: "Analog",
    definition:
      "The opposite of digital, in which all information is quantized. Analog is the way the world beyond the quantum level works. Part of the challenge of digital engineering is to convert noisy, inaccurate, and ugly real-world data to the pristine purity of 1s and 0s. The last two decades have seen a massive growth in digital signal processors, partly because they allow us to replace analog circuits with digital. Ultimately, the goal is to push the digital components all the way back to all systems' front ends--essentially connecting a radio's antenna, for example, directly into a DSP input.",
  },
  {
    term: "Anode",
    definition:
      "The element of a semiconductor device that accepts electrons. In a diode, for example, current passes from the anode to the cathode. On a diode, the anode is the terminal not marked by a band.",
  },
  {
    term: "Aperiodic",
    definition:
      "Lacking periodicity; random. The term is most often used in the embedded context when scheduling periodictasks via RMA. The issue of what to do about aperiodic tasks and interrupts inevitably arises in real-world systems. Aperiodic tasks become ready to run on the occurrence of unpredictable events.",
  },
  {
    term: "Aperiodic Server",
    definition:
      "1.A task that responds to events of an application software\n2.Software that is specific to a particular embedded system. Such application-specific code is generally built on a layered architecture of reusable components, such as a real-time operating system and network protocol stack or other middleware. If there is no such architecture, then this term may not be used. The application software is unlikely to be reusable across embedded platforms, simply because each embedded system has a different application.\n3.Application-specific integrated circuit\n4.A piece of custom-designed hardware in a mass-produced chip.Abbreviated ASIC.",
  },
  {
    term: "Ariane 5",
    definition:
      "An infamous European rocket (made by Aerospatiale) that demonstrates the flawed principle of redundancy based on duplicated software. Unlike hardware subsystems, which either work or fail and can be made more reliable through duplication, software is either right or wrong in its logic. If software fails once, it will fail again given the same inputs; merely duplicating the code does not add redundancy.\n\nIn the case of Ariane 5, some code borrowed form the successful Ariane 4 design experienced an overflow during flight. Recognizing the overflow, the primary controller shut itself down and the secondary controller took over. Unfortunately the secondary controller experienced the very same overflow condition and shut down as well. The rocket self-destructed in midair, taking some very expensive cargo with it.",
  },
  {
    term: "ARM",
    definition:
      "A 32-bit RISC processor widely used in low-power embedded applications. Short for Advanced RISC Machine.\nDEC later licensed the design and produced the StrongARM. This work was later passed to Intel as part of a patent-related settlement, and Intel took the opportunity to replace their ailing i860 and i960 designs with the StrongARM. Today these are known by the name XScale.",
  },
  {
    term: "ARM Thumb",
    definition:
      'A 16-bit variant of the 32-bit ARM instruction set. ARM processors that support the Thumb instruction set can be switched in and out of "Thumb mode" via a bit in a register. Once in the Thumb mode, the CPU fetches special 16-bit instructions from memory. The advantage of these instructions is that they can be fetched more quickly across a narrower data bus and consume less memory. Not all of the ARM\'s capabilities are supported in Thumb mode, however.',
  },
  {
    term: "ARP",
    definition:
      "A mechanism for mapping a destination IP address to its corresponding MAC address so that an IP packet can be routed over a specific physical network such as Ethernet. Short for Address Resolution Protocol. RFC 826.\n\nEach node on a network has both a logical (IP) address and a physical (MAC) address. When sending a packet to a specific node, the application software provides only the IP address. The protocol stack, via ARP, must determine the specific MAC address for that IP address before it can finalize and send the network frame that will contain the IP packet. In practice, it is inefficient to make ARP requests and receive replies before each packet is sent, so a table is kept (typically at the network driver) of all the known IP-MAC address pairs. Only if the MAC address of a particular destination IP address cannot be found in that table is the ARP protocol invoked. The results are added to the table then so they can be used later.",
  },
  {
    term: "Assembler",
    definition:
      "A software development tool that translates human-readable assembly language programs into machine-readable code that the target processor can understand and execute.",
  },
  {
    term: "Assembly Language",
    definition:
      "A human-writable form of a processor's native instruction set. In its typical form, each line of assembly code represents a single CPU instruction. The human-readable representation of each opcode is called a mnemonic.",
  },
  {
    term: "Asynchronous Communications",
    definition:
      "A communications scheme that transmits data over a single wire, sending bits one at a time in sequence. The timing of each bit is known by both transmitter and receiver. Each transmitted data byte begins with a start bit that starts the receiverÃ¢â‚¬Å¡Ãƒâ€žÃƒÂ´s timing circuitry. Critical to the success of a synchronous communications is that the data bits have well-defined widths.",
  },
  {
    term: "Atomic",
    definition:
      "1. An operation that cannot be interrupted is considered atomic. Atomic operations are inherently reentrant; they complete without fear of preemption or corruption by other tasks. A single opcode that does a read-modify-write, for instance, modifies a shared variable without the risk of an intervening interrupt causing the variable to be used in a half-changed state. Software developers can turn non-natomic operations into atomic ones by disabling interrupts. See also swap, test-and set.\n\n2. Used to indicate measurements scales. Atomic scales are on the order of angstroms.",
  },
  {
    term: "ATVEF",
    definition:
      "A standard for creating enhanced, interactive television content and for delivering that content to a range of television, set-top, and PC-based receivers. Short for Advanced TV Enhancement Forum . ATVEF defines the standards used to create enhanced content that can be delivered over a variety of media, including analog (NTSC) and digital (ATSC) television broadcasts, and a variety of networks, including terrestrial broadcasts, cable, and satellite. It is based on HTML",
  },
  {
    term: "Average-case Execution Time",
    definition:
      "The average amount of time to execute a section of code. It may be helpful to define the jitter and standard deviation along the average-case execution time might be interesting in some applications, the worst-case execution time is typically of far more interest, particularly in real-time systems.",
  },
  {
    term: "BASIC Stamp",
    definition:
      "A tiny single-board computer manufactured by Parallax based on an 8051, PIC, or other microcontroller. The BASIC Stamp is about the size of a postage stamp (hence the name) and executes a variant of BASIC called PBASIC. Inexpensive, self-contained, and easy to program, they're used in education and simple embedded systems that require little horsepower but rapid delivery.",
  },
  {
    term: "Bi-directional",
    definition:
      "Describes a type of device or bus that supports two-way data transfers. To reduce wiring, connectors, and pin counts, it's common to share data on one bus. Data can move from device A to B or from B to A, though not at the same time.",
  },
  {
    term: "Big-endian",
    definition:
      "A data representation for a multibyte value that has the most significant byte stored at the lowest memory address. Note that only the bytes are reordered, never the nibbles or bits that comprise them. Every processor stores its data in either big-endian or little-endian format. Sun's SPARC, Motorola's 68k, and the PowerPC families are all big-endian. The Java virtual machine is big-endian as well. Similarly, every communications protocol must define the byte order of its multibyte values. TCP/IP uses big-endian representation.",
  },
  {
    term: "Binary Semaphore",
    definition:
      "A type of semaphore with just two states. Often used to guarantee mutual exclution.",
  },
  {
    term: "Board Support Package",
    definition:
      "Part of a software package that is processor or platform dependent. Abbreviated BSP. Typically, sample source code for the BSP is provided by the package developer. To port the larger package, only the code in the board support package must be modified. Most commercial real-time operating systems have a BSP to make porting easy.",
  },
  {
    term: "Bond-out Processor",
    definition:
      "A special version of a processor that has some of the internal signals brought out to external pins. Bond-out processors are designed to be used within an in-circuit emulator and are not typically used in any other kind of system.",
  },
  {
    term: "Breakpoint",
    definition:
      "A location in a program at which execution is to be stopped and control of the processor switched to the debugger. Mechanisms for creating and removing breakpoints are provided by most debugging tools.",
  },
  {
    term: "BSP",
    definition: "board support package.",
  },
  {
    term: "Busicom",
    definition:
      "A Japanese company that, in 1971, used Intel's new single-chip 4004 processor to create what were arguably the world's first embedded systems: a family of 12 business calculators.",
  },
  {
    term: "Busy Wait",
    definition: "To waste precious CPU cycles polling.",
  },
  {
    term: "C99",
    definition:
      "A 1999 update to the international standard for the C programming language. The updated standard is formally known as ISO/IEC 9899: Programming Languages—C. From an embedded systems programming perspective, one of C99's most exciting enhancements is built-in definition of signed and unsigned integer data types of 8, 16, and 32 bits. (They are typedef'd as uint8_t, int8_t, uint16_t, etc. in the platform-specific library header file stdint.h.) The C99 standard also recognizes C++-style comments (//) and makes several other long-overdue language improvements.",
  },
  {
    term: "Central Processing Unit",
    definition: "The part of a processor that executes instructions.",
  },
  {
    term: "Checksum",
    definition:
      "A numerical check value calculated from a larger set of data. A checksum is most often used when sending a packet of data over a network or other communications channel. One checksum formula is a simple addition, with overflow ignored, wherein the bytes of the packet are added together into a variable of a fixed size/width (say, 16 bits) as they are sent. The checksum is typically sent at the end of the packet and used at the receiving end to confirm the integrity of the preceding data.",
  },
  {
    term: "Compiler",
    definition:
      "A software-development tool that translates high-level language programs into the machine-language instructions that a particular processor can understand and execute. However, the object code that results is not yet ready to be run; at least a linker or link-step must follow.",
  },
  {
    term: "Complex Instruction Set Computer",
    definition:
      "1.Describes the architecture of a processor family. Abbreviated CISC. So-called CISC processors generally feature variable-length instructions and multiple addressing formats and have a small number of general-purpose registers. Intel's 80x86 family is the quintessential example of CISC.\n\n2.Contrast with reduced instruction set computer.",
  },
  {
    term: "Complex Programmable Logic Device",
    definition:
      "A larger, more capable PLD. Abbreviated CPLD. Each CPLD typically consists of several programmable logic blocks plus a matrix of programmable interconnecting paths. CPLDs can be used to create larger and more advanced logic circuits than PLDs but are generally smaller and less flexible than FPGAs.",
  },
  {
    term: "Context",
    definition:
      "The current state of the processor's registers and flags. The context must be saved when an interrupt occurs or when an operating system selects a new task to run and preempts the previously running task.",
  },
  {
    term: "Context Switch",
    definition:
      "The process of switching from one task to another in a multitasking operating system. A context switch involves saving the context of the running task and restoring the previously saved context of the other. The piece of code that does this is necessarily processor specific.",
  },
  {
    term: "Counter/Timer",
    definition:
      "A common peripheral that counts either external events (counter mode) or processor cycles (timer mode). Virtually every microcontroller has one or more on-board counter/timers. Most operate in a vast number of modes; some have dozens of control registers (Motorola's TPU has more than 50).\n\nCounter/timer hardware has more uses than can be imagined, including as input devices to count events, as outputs to drive pulse-width modulation devices, and as internal units to create regular interrupts for RTOS context switching.",
  },
  {
    term: "Counting Semaphore",
    definition:
      "A type of semaphore with more than two states. A counting semaphore is typically used to track multiple resources of the same type. An attempt to take a counting semaphore is blocked only if all of the available resources are in use.",
  },
  {
    term: "CRC",
    definition: "cyclic redundancy code.",
  },
  {
    term: "Critical Section",
    definition:
      "A sequence of instructions that must be executed in sequence and without interruption to guarantee correct operation of the software. If the instructions are interrupted, a race condition might occur.",
  },
  {
    term: "Cross-Compiler",
    definition:
      "A compiler that runs on a different platform from the one for which it produces object code. Often even the processor architecture/family of the host and target platforms differ.",
  },
  {
    term: "D/A converter",
    definition:
      'A hardware device that takes a set of bits, typically from a processor, as input and produces an analog signal proportional to the digital input as output. Short for digital-to-analog converter. Abbreviated DAC. D/A converters might be as simple as an array of resistors configured in the typical "R-2R" fashion or a hybrid module that generates very precise results with many bits of resolution. A simple use is to vary the intensity of a lamp (another approach that avoids the messy analog world is a pulse-width modulator that uses different switching rates and pulse lengths to control intensity).',
  },
  {
    term: "Data Bus",
    definition:
      "A set of electrical signals connected to the processor and all of the memory and peripheral devices with which it communicates for the purpose of transferring data between them. When the processor wants to read (write) the contents of a memory location or register within a particular peripheral, it sets the address bus pins appropriately and receives (transmits) the contents on the data bus. One unit of data is transferred in each memory cycle.",
  },
  {
    term: "Deadline",
    definition:
      "In a real-time system, the time at which a particular set of computations or data transfers must be completed. There are typically consequences associated with missing a deadline. If the deadline absolutely, positively must be met every time or else, it is called a hard deadline. Hard deadlines have dire consequences when missed. Other deadlines are said to be soft deadlines.",
  },
  {
    term: "Deadlock",
    definition:
      "An unwanted software situation in which an entire set of tasks is blocked, waiting for an event that only a task within the same set can cause. If a deadlock occurs, the only solution is to reset the involved set of tasks or the entire system. However, it is usually possible to prevent deadlocks altogether by following certain software-design practices. Consult an operating systems textbook for details.",
  },
  {
    term: "Debug Monitor",
    definition:
      "A piece of embedded software that has been designed specifically for use as a debugging tool. It usually resides in ROM and communicates with a debugger via a serial port or network connection. The debug monitor provides a set of primitive commands to view and modify memory locations and registers, create and remove breakpoints, and execute your program. A remote debugger with knowledge of the command format communicates with the debug monitor and combines these primitives to fulfill higher-level requests like program download and single-step.",
  },
  {
    term: "Debugger",
    definition:
      "A tool used to test and debug software. A typical remote debugger runs on a host computer and connects to the target through a serial port or over a network. Using the debugger, you can download software to the target for immediate execution. You can also set breakpoints in the code and examine the contents of specific memory locations and registers.",
  },
  {
    term: "Device Driver",
    definition:
      "A software module that hides the details of a particular peripheral and provides a high-level programming interface to it. Each device driver is typically a piece of operating system-specific software that makes it possible for application software to attach to, read and write data from, and change the behavior of the peripheral device. The more complex the operating system environment, the more likely it is that the device driver code will have to conform to a certain high-level API. For example, Windows and Unix both require every network device driver to conform to a common API.",
  },
  {
    term: "Device Programmer",
    definition:
      "A tool for programming EPROMs, PLDs, nonvolatile memories, and other electrically programmable devices. Typically, the programmable device is inserted into a socket on the device programmer, and the contents of a memory buffer are then transferred into it. So-called gang programmers create several devices from the same image simultaneously.",
  },
  {
    term: "Digital Filter",
    definition:
      "A filter that's implemented digitally. A digital filter accepts digital inputs (typically samples read from an A/D converter) and produces digital outputs. The data is processed in firmware running on a digital signal processor.",
  },
  {
    term: "Digital Signal Processor",
    definition:
      "A device that is similar to a microprocessor, except that the internal CPU has been optimized for use in applications involving discrete-time signal processing. Abbreviated DSP. In addition to standard microprocessor instructions, DSPs usually support a set of specialized instructions, like multiply-and-accumulate, to perform common signal-processing computations quickly. A Harvard architecture, featuring separate code and data memory spaces, is commonly used to speed data throughput. Common DSP families include Texas Instruments' 320Cxx and Motorola's 5600x series.",
  },
  {
    term: "Direct Memory Access",
    definition:
      "A technique for transferring data directly between two peripherals (or memory and an I/O device) with only minimal intervention by the processor. Abbreviated DMA. DMA transfers are managed by a third device called a DMA controller, which shares the memory bus with the processor. Unused memory cycles are stolen by the DMA controller. The processor is only involved, via an interrupt, once the entire block of data has been transferred. In that way, the processor is freed to do other things and overall throughput is increased.",
  },
  {
    term: "Down Counter",
    definition:
      "A counter that counts down, from its maximum value toward zero.\n   Contrast with up counter.",
  },
  {
    term: "DRAM",
    definition:
      "A type of RAM that maintains its content only as long as the data stored in the device is refreshed at regular intervals. Short for Dynamic Random Access Memory. The repetitive row by column refresh access cycles are usually performed by a peripheral called a DRAM controller. If this isn't done every few milliseconds, some or all of the data stored in the memory can be lost. DRAM is much cheaper per byte than SRAM because it requires just one transistor per bit rather than four to six; however, it has longer access times. DRAM's lower cost per byte makes it attractive whenever large amounts of RAM are required. Many systems include both types: a small block of SRAM (a few kibi bytes) along a critical data path and a much larger block of DRAM (mebibytes perhaps) for everything else.",
  },
  {
    term: "DSP",
    definition: "Digital signal processor.",
  },
  {
    term: "EEPROM",
    definition:
      "A type of ROM that can be erased electronically and reprogrammed in-circuit (or with a device programmer). Short for Electrically Erasable Programmable Read Only Memory. From the programmer's perspective, EEPROM is very similar to flash memory. The biggest difference is that the bytes (words) of an EEPROM can be erased individually.",
  },
  {
    term: "Electromagnetic Spectrum",
    definition:
      "The entire range of possible frequencies, from DC to gamma rays and beyond. The spectrum is measured in terms of wavelength or frequency, where wavelength in meters = 3 × 108/frequency in hertz. AM radio is at the low end of the spectrum, from 500 kHz to 1.6 MHz; FM radio is around 100 MHz, cell phones at 800 MHz, radar from 2 to 14 GHz, and visible light around 106 GHz.",
  },
  {
    term: "Embedded C++",
    definition:
      "A subset of the C++ programming language that is optimized for embedded systems use and supported by some compiler vendors. Abbreviated EC++.",
  },
  {
    term: "Embedded System",
    definition:
      "A combination of computer hardware and software, and perhaps additional mechanical or other parts, designed to perform a dedicated function. In some cases, embedded systems are part of a larger system or product, as in the case of an antilock braking system in a car.",
  },
  {
    term: "Emulator",
    definition:
      "1. In-circuit emulator.\n2.  Any debugging tool that pretends to be a system resource and adds additional functionality or remote visibility. See also ROM emulator.",
  },
  {
    term: "Endianness",
    definition:
      "The attribute of a hardware or software architecture that indicates how multibyte values are represented and stored. The two possibilities are called big-endian and little-endian.",
  },
  {
    term: "EPROM",
    definition:
      "A type of ROM that can be erased by exposing it to ultraviolet light. Once erased, an EPROM can be reprogrammed with a device programmer. Short for Erasable Programmable Read Only Memory. A window in the device allows ultraviolet radiation to enter the device and reset the ROM circuitry to its initial state.",
  },
  {
    term: "Executable",
    definition:
      "A file containing object code that is ready for execution on the target. All that remains is to place the object code into a ROM or download it via a debugging tool.",
  },
  {
    term: "Field-Programmable Gate Array",
    definition:
      "A logic chip that has thousands of internal gates and can be programmed. Abbreviated FPGA. FPGAs are especially popular for prototyping integrated circuit designs. However, once the design is finalized, hard-wired chips called ASICs are often used instead for their faster performance and lower cost.",
  },
  {
    term: "Firmware",
    definition: "Executable software that is stored within a ROM.",
  },
  {
    term: "Flash",
    definition:
      "1.  To download new firm ware into a flash memory. A bootloader typically facilitates this process by communicating with a program on the host, erasing the flash memory, and writing the new code. The sector of the flash memory that contains the bootloader's code must not be overwritten in the process.\n2.  Flash memory.\n3. A RAM-ROM hybrid that can be erased and rewritten under software control. Abbreviated flash. Flash is an in-circuit programmable nonvolatile memory segmented into blocks called sectors. Each sector can be individually erased, then the data within it rewritten. Flash memory is common in systems that require nonvolatile data storage at very low cost. In some cases, a large flash device can be used instead of a disk drive. Although there is a theoretical limit to the number of times a flash memory can be erased and rewritten successfully, this limit is seldom reached in practice.",
  },
  {
    term: "Forth",
    definition:
      "A niche programming language originally designed for real-time control of telescopes. An ANSI standard since 1994 (X3.215). Forth has a simple syntax and many keywords, unlike C/C++ and similar languages, which are the opposite. Forth programs are made up of many small procedures, and math is via RPN. These procedures are compiled, though Forth has no compiler in the traditional sense. Forth is essentially just a collection of procedures, called words, and an interpreter.\nNowadays, Forth is used primarily to test and debug hardware and bring up systems. Only about 2% of the subscribers of Embedded Systems Programming reported using Forth regularly in a 2001 survey.\n\nInterestingly, some Unix workstations boot a small Forth interpreter before the rest of the operating system. One such environment is Sun's Open Boot, which provides Forth programming capabilities right out of ROM and a small bootloader that enables the operating system to be manually or automatically loaded and run from a disk drive or over a network. IEEE 1275 defines a standard based on Open Boot.",
  },
  {
    term: "Fuzzy Logic",
    definition:
      "1.  A methodology that makes it possible to make decisions based only on ambiguous or imprecise input data. Fuzzy logic can be implemented in software or hardware. As a first step, the possible inputs are grouped into sets. Decisions are then made based on the partial membership of inputs in these sets (according to fuzzy set theory), rather than the specific values of the input signals. The overlap of these partial set memberships results is a specific decision.\n2.  A multivalued set theory. Contrast with Boolean logic.",
  },
  {
    term: "Geartooth Hall Effect Sensor",
    definition:
      "A Hall effect sensor and a magnet packaged together for easy use in detecting the rotation of a gear. As each geartooth passes by the sensor, a pulse is output. A counter can be connected to count these pulses and software can then determine the speed of the gear's rotation.",
  },
  {
    term: "General-Purpose Computer",
    definition:
      "A combination of computer hardware and software that serves as a general-purpose computing platform. PCs, Macs, and Unix workstations are the most popular modern examples. Contrast with embedded system.",
  },
  {
    term: "General-Purpose I/O",
    definition:
      "Customizable input/output pins on a microcontroller. Abbreviated GPIO. By wiring the hardware appropriately and configuring the GPIO port in software, one pin can be used as input to read a switch, another as an output to control a status LED, and a pair to serve as clock and data for a serial EEPROM.",
  },
  {
    term: "Glitch",
    definition:
      'An unwanted, spurious logic pulse of very short duration. Any unwanted, erratic, and generally nonreproducible behavior of a system is termed a glitch.\n\nA glitch is also the standard excuse for a single irreproducible failure. Experienced developers know that the phrase, "It must\'ve just been a glitch," really means, "I have no idea what just happened, but maybe if I ignore it, the problem will go away." Unfortunately, it seldom does.',
  },
  {
    term: "Glue Logic",
    definition:
      "The address decoding and other messy circuitry (or programmable logic) that ties together a system. It's called glue logic because it's what holds the entire system together.",
  },
  {
    term: "GNU Tools",
    definition:
      "A broad generic name for the popular GNU compiler (gcc), debugger (gdb), binutils, and related software development tools.",
  },
  {
    term: "Gray Code",
    definition:
      "Any of several possible mappings of the integers from 0 to 2n-1 to a set of n-bit binary values such that only 1 bit differs between each successive binary value. The mapping that's typically used is formally known as binary reflected Gray code. Generating a set of that form involves starting with 0...000b and always flipping the rightmost bit that will give a new value.\n\nApplications abound. Consider a shaft encoder with a 4-bit parallel output. Encoders use brushes or optical techniques to report position; these are mechanical and, therefore, imperfect implementations. An encoder that outputs normal binary, if positioned between 3 (0011b) and 4 (0100b), might dither with 3 bits changing. The processor might read (serially) 0011b (3), 0100b (4), or 0111b (7)—the latter a hugely incorrect value. If a Gray code is used, the data will dither between 0010b (3) and 0110b (4); the only possible values seen by the computer are those two, both of which are off by one from each other, and either of which is a reasonable approximation of the position.",
  },
  {
    term: "Heap",
    definition:
      "An area of memory used for dynamic memory allocation. Calls to malloc() and free() and the C++ operators new and delete result in run-time manipulation of the heap. In Java, there is a heap and a new keyword, but no way to manually free the space. A garbage collector does that automatically.",
  },
  {
    term: "High-level Language",
    definition:
      "A language, such as C, C++, Ada, or Java, that is processor independent. Abbreviated HLL. When programming in a high-level language, it is possible to concentrate on algorithms and applications without worrying about the details of a particular processor.",
  },
  {
    term: "Host",
    definition:
      "1.A general-purpose computer that communicates with the target via a serial port or network connection.\nHungarian notation\n2.A variable naming convention that encodes a variable's type as a prefix to its name. For example, an integer might be named iVariableName, with the leading i denoting the variable's type. Hungarian notation is promoted as a readability aid, which helps the programmer avoid the headache of digging through typedefs and include files to determine a variable's type.\n3.Hungarian notation is essentially a commenting technique. Comments often lie, though, when they become outdated—a huge source of problems with the notation. Change the type of a variable (say, when porting the code from a 16- to a 32-bit processor), and you have to search out and change the name of every use of that variable. That rarely happens, of course, as in wParam in Microsoft's Win32 APIs: the type changed from a 16-bit value (wstands for word) to a 32-bit value(which should have been dwParam).\n4.In practice, the prefix idea is extremely valuable for marking three common variable types in C programs: globals, pointers, and booleans. These three types are also unlikely to change as the program evolves.\n5.Global variables are dangerous, particularly when they are used in multitasking systems. So marking them with a preceding g, though not truly Hungarian in its style, is helpful for identifying possible critical sections.\n6.By preceding a pointer variable with p, dereferencing the right number of times becomes easy. Whereas pFoo refers to the pointer, *pFoo and pFoo-> clearly refer to the actual object. Likewise, if you have a pointer to a pointer, label it with a pp.",
  },
  {
    term: "I/O",
    definition:
      "1.  Short for input/output.\n2. The  interface between a processor and the world around it. The simplest examples are switches (inputs) and LEDs (outputs).",
  },
  {
    term: "I/O Device",
    definition:
      "A piece of hardware that interfaces between the processor and the outside world. Common examples are switches, LEDs, serial ports, and network controllers.",
  },
  {
    term: "I/O Map",
    definition:
      "A table or diagram containing the name and address range of each I/O device addressable by the processor within the I/O space.",
  },
  {
    term: "I/O Space",
    definition:
      "A special memory region provided by some processors and generally reserved for the attachment of I/O devices. Memory locations and registers within a processor's I/O space can only be accessed via special opcodes. For example, processors in the 80x86 family have special I/O space instructions called in and out. Contrast with memory space.",
  },
  {
    term: "I2C",
    definition:
      '(eye squared see) abbr. An inexpensive chip interconnection popular on circuit boards. Short for Inter-Integrated Circuit bus. Featuring a two-wire synchronous (data and clock) connection, I2C can run at speeds up to 100 kHz ("standard") or 400 kHz ("high speed") and is multidrop.',
  },
  {
    term: "ICE",
    definition:
      "1.In-circuit emulator.\n2.A debugging tool that takes the place of (emulates) the processor on the target board. Abbreviated ICE and often called an emulator for short. The ICE is a bridge between the target system and a software debugger running on the host. It provides the resources needed to access the target microprocessor. An emulator connects to or completely replaces the target CPU via a large cable, which routes all signals to the ICE unit. In-circuit emulators frequently incorporate a special bond-out version of the target processor that brings normally buried signals out of the chip to the ICE's logic circuits.",
  },
  {
    term: "Instruction Pointer",
    definition:
      "A register in a processor that contains the address of the next instruction to be executed.",
  },
  {
    term: "Interrupt",
    definition:
      "An asynchronous electrical signal from a peripheral to the processor. When the peripheral asserts this signal, an interrupt is said to occur. When an interrupt occurs, the current context is saved and an interrupt service routine is executed. When the interrupt service routine exits, control of the processor is returned to whatever part of the software was previously running.",
  },
  {
    term: "Interrupt Latency",
    definition:
      "The amount of time between the assertion of an interrupt signal and the start of the associated interrupt service routine. Factors that affect interrupt latency include the length of time that interrupts are disabled during normal program execution, processor speed, and preemption of the processor by higher priority interrupts.",
  },
  {
    term: "Interrupt Service Routine",
    definition:
      "A small piece of software executed in response to a particular interrupt. Abbreviated ISR.",
  },
  {
    term: "Interrupt Type",
    definition:
      "A unique number associated with each interrupt. The interrupt type is typically the processor's index into the interrupt vector table.",
  },
  {
    term: "Interrupt Vector",
    definition: "The address of an interrupt service routine.",
  },
  {
    term: "Interrupt Vector Table",
    definition:
      "A table containing interrupt vectors, indexed by interrupt type, that maps  interrupts and interrupt service routines. The interrupt vector table must be initialized before interrupts are enabled.",
  },
  {
    term: "Intertask Communication",
    definition:
      "The passing of data between tasks in a multitasking system. Although perverse programmers can accomplish this communication with global variables, all decent RTOSes include extensive resources (mailboxes, queues, etc.) to safely transfer data without risk of race conditions.",
  },
  {
    term: "Intertask Synchronization",
    definition:
      "The coordination of timing and ordering between tasks in a multitasking environment. All decent RTOSes include resources (semaphores, monitors, etc.) to safely synchronize without the risk of race conditions.",
  },
  {
    term: "Java Processor",
    definition:
      "A piece of silicon, or IP, capable of executing Java bytecodes natively. When the Java programming language was created, there were no such processors. Therefore, the only way to execute Java code was with a Java virtual machine. Java processors, like those from aJile, make it possible to execute Java bytecodes without a JVM. An interesting side note: compilers exist to translate programs written in other languages, like C and C++, to Java bytecodes. So a Java processor—or a Java virtual machine—can execute code written in any igh-level language.",
  },
  {
    term: "Jitter",
    definition:
      "A dithering in time of a pulse or pulse train. Clock jitter is a tremendous problem in high-speed systems, where even 1 ns of jitter in a signal propagated all over a PCB can cause crashes.",
  },
  {
    term: "JTAG",
    definition:
      "A standard for providing external test access to integrated circuits serially, via a four- or five-pin external interface. Short for Joint Test Action Group, which developed the standard. The JTAG standard has been adopted as an IEEE standard (IEEE 1149 Standard Test Access Port and Boundary-Scan Architecture). JTAG ports have been widely embraced by processor manufacturers. Debug monitors and in-circuit emulators increasingly leverage the capabilities inherent in JTAG.",
  },
  {
    term: "Jump Table",
    definition:
      "An array of pointers to functions. A jump table is an efficient way to call one of several functions based on some input parameter. The input parameter is typically turned into an integer first, then used as an index into the array of function pointers. The address found there is the destination for the function call.",
  },
  {
    term: "Jumper",
    definition:
      "A small piece of metal, usually within a plastic sheath, that is placed over a pair of pins to connect them electronically. By closing or opening this electrical circuit, the jumper acts as a switch. Embedded software can make run-time decisions based on the user's attachment or removal of each jumper on a circuit board.",
  },
  {
    term: "Junction Transistor",
    definition:
      "A transistor made by growing P- and N-type material together on a single substrate. The junctions are the P–N interfaces. Junction transistors are thus named to differentiate them from point-contact transistors, the first type of transistor ever made. See also bipolar transistor.",
  },
  {
    term: "Kernel",
    definition:
      "1.  A minimalist operating system\n2.  The core of a microkernel architecture operating system like Mach.\n3.  An essential part of any real-time operating system, the kernel consists of the scheduler and context switch routine.",
  },
  {
    term: "Kernel Mode",
    definition:
      "A privileged CPU mode. Sometimes called supervisor mode. Parts of the operating system, such as the scheduler, device drivers, and the memory manager, usually execute in kernel mode, whereas application code executes in user mode. The transition from user mode to kernel mode is typically made somewhere inside an OS system call when a software interrupt instruction is executed.\n\nMany of the statically linked single-memory space RTOSes used in embedded systems never place the processor into user mode. Thus, the tasls running on top of such an RTOS can execute any CPU instruction, even those, such as disable interrupts, that could bring the RTOS to its knees.",
  },
  {
    term: "Kibi-",
    definition:
      'The prefix meaning 210. Abbreviated Ki.\n    •             1 kibibit: 1 Kibit = 1,024 bits\n    •             1 kibibyte: 1 KiB = 1,024 bytes\n    Note the arcane use of the lower case "k" in the name "kibi," but the use of capital "K" in the abbreviations.',
  },
  {
    term: "Linker",
    definition:
      "A software development tool that accepts one or more object files as input and outputs a reloadable program. The linker is thus run after all of the source files have been compiled and assembled into object files.",
  },
  {
    term: "Lint",
    definition:
      '1.A software development tool used to check C and C++ programs for error-prone syntactical constructs. The C and C++ language standards are loosely written. Plenty of run-time details, such as the actual size of an int, are left up to compiler implementers. Lint can help you find dangerous and nonportable constructs in your code before a compiler turns them into run-time bugs.\n2.The error-prone syntactical constructs that the lint tool finds in C and C++ programs. A program that passes through the lint tool without generating any warnings is termed "lint-free."',
  },
  {
    term: "Linux",
    definition:
      "A GNU-based Unix-like open source operating system, the kernel for which was developed by Linus Torvalds.",
  },
  {
    term: "Little-endian",
    definition:
      "A data representation for a multibyte value that has the least significant byte stored at the lowest memory address. Note that only the bytes are reordered, never the nibbles or bits that comprise them. Every processor stores its data in either big-endian or little-endian format. Intel's 80x86 family is little-endian.",
  },
  {
    term: "Locator",
    definition:
      "1.A software development tool that assigns physical addresses to a relocatable program. This is the last step in preparing software for execution by an embedded system. The resulting file is called an executable. In some cases, the locator's functionality is built into the linker. In others, the operating system might include a loader, which performs the location step.\n\n   \n2.A simplified example showing how the locator assigns code and data to specific physical memory ranges and adds (uninitialized) stack and heap sections. Not shown is that the initialized data must be stored in ROM and copied out into RAM by the startup code",
  },
  {
    term: "Logic analyzer",
    definition:
      "A hardware debugging tool that can capture and display the logic levels (0 or 1) of dozens, or even hundreds, of electrical signals as they occur. Logic analyzers can be quite helpful for debugging hardware problems and complex processor-peripheral interactions. They are primarily characterized by their capture memory depth and width and by their acquisition speed.",
  },
  {
    term: "MAC",
    definition: "1. Multiply-and-accumulate.\n2. MAC address.",
  },
  {
    term: "MAC address",
    definition:
      "A globally unique 48-bit hardware address assigned to each device on a network. Every system on a physical network, like Ethernet or Token Ring, includes a peripheral called a network controller. This chip is the processor's interface to the physical communications medium. As part of its initialization, the network controller must be fed a unique hardware address to use when communicating over the network. In the case of Ethernet, the hardware address is a 48-bit value. To guarantee global uniqueness, the upper 24 bits are controlled by the IEEE, which allocates them to individual device manufacturers. See OUI for more information about obtaining a block of Ethernet addresses for your company.",
  },
  {
    term: "Mebi-",
    definition:
      "The prefix meaning 220. Abbreviated Mi.\n   •             1 Mebibit: 1 Mibit = 1,048,576 bits\n   •             1 Mebibyte: 1 MiB = 1,048,576 bytes",
  },
  {
    term: "Memory Map",
    definition:
      "A table or diagram containing the name and address range of each peripheral and memory device within a processor's memory space. Memory maps are a helpful aid in getting to know one's target.",
  },
  {
    term: "Memory-mapped I/O",
    definition:
      "A common hardware design methodology in which peripheral control and status registers are mapped into the memory space rather than the I/O space. From the software developer's point of view, memory-mapped I/O devices look very much like memory devices.Their registers can even be accessed via ordinary pointers and data structures, greatly simplifying device driver implementation.",
  },
  {
    term: "Memory Space",
    definition:
      "A processor's standard address space.\n   Contrast with I/O space.",
  },
  {
    term: "Microcontroller",
    definition:
      "A highly integrated microprocessor designed specifically for use in embedded systems. Microcontrollers typically include an integrated CPU, memory (a small amount of RAM, ROM, or both), and other peripherals on the same chip. Common examples are Microchip'sPIC, the 8051, Intel's 80196, and Motorola's 68HCxx series.",
  },
  {
    term: "Microprocessor",
    definition:
      "A piece of silicon containing a general-purpose CPU. The most common examples are Intel's 80x86 and Motorola's 680x0 families.",
  },
  {
    term: "MISRA C",
    definition:
      "A set of 127 guidelines for the use of C in safety-critical software. Although widely used in automotive systems, for example, ISO standard C is not itself properly suited to the development of safety-critical software. The MISRA C guidelines attempt to shore up weaknesses in the programming language standard so that something very like C can be used to reliably develop safe software.\n   MISRA C can be considered a subset of ISO C; the discarded language constructs are those deemed most prone to error. For example, rule 35 prohibits the use of assignments within Boolean expressions; thus, simple if (x = 1) typos can't cause run-time errors that are difficult to detect and debug. If enforced by a code-checking tool as part of the build process, these rules can be complied with selectively and easily.",
  },
  {
    term: "Monitor",
    definition:
      "1. A language-level  intertask synchronization primitive. Java is the only language in the embedded systems space that supports monitors.\n2. The CRT or LCD display attached to a computer.",
  },
  {
    term: "Multiply-and-accumulate",
    definition:
      "Describes a special CPU instruction, common on digital signal processors, that performs both a multiplication and an addition in a single instruction cycle. The result of the multiplication is typically added to a sum kept in a register. Abbreviated MAC. A multiply-and-accumulate instruction is helpful for speeding up the execution of the many digital filters and transforms required in signal processing applications. In recent years, many microprocessor and microcontroller makers have included a MAC instruction on their products as well.",
  },
  {
    term: "Multiprocessing",
    definition:
      "The use of more than one processor in a single computer system. So-called multiprocessor systems usually have a common memory space through which all of the processors can communicate and share data. In addition, some multiprocessor systems support parallel processing.",
  },
  {
    term: "Multitasking",
    definition:
      "1.The execution of multiple software routines in pseudoparallel. Each routine represents a separate thread of execution. The operating system is responsible for simulating parallelism by parceling out the processor's time to the individual threads.\n2.Multithreading\n3.Multitasking.",
  },
  {
    term: "Mutex",
    definition:
      "An operating system data structure used by tasks to ensure exclusive access to shared variables or hardware registers. Short for  mutual exclusion. A mutex is a multitasking-aware binary flag that can be used to synchronize the activities of multiple tasks. As such, it can protect critical sections from interruption and shared resources from simultaneous accesses.",
  },
  {
    term: "Mutual Exclusion",
    definition:
      "A guarantee of exclusive access to a shared resource. In embedded systems, the shared resource is typically a block of memory, a global variable, a peripheral, or a set of registers. Mutual exclusion is typically achieved with the use of a mutex.",
  },
  {
    term: "NAK",
    definition:
      "A response that something was not received properly. Short for Not AcKnowledged. Ironically, the mere fact that there's a NAK implies that the packet or command was received. It could be that there was some sort of an error (possibly checksum related) or that the requested command was not supported.",
  },
  {
    term: "Nanosecond",
    definition:
      "A billionth of a second. Abbreviated ns. A nanosecond is the length of one clock cycle at a 1 GHz rate. In that sense, it is a relatively short interval of time in which the software in a more typical MHz/kHz embedded system cannot even begin to respond to events around it.",
  },
  {
    term: "Netlist",
    definition:
      "A computer file that lists all of the connections needed to produce a printed circuit board. The netlist is an ASCII text file that lists the characteristics of each component and what each pin of every component connects to. Each of these connections is called a node.\nNetlists are produced by schematic capture programs and are sometimes used as inputs to autorouters.\n   A portion of a netlist showing that node N00002 is associated with both a resistor and a diode; these two components thus connect together",
  },
  {
    term: "Network Processor",
    definition:
      "A device that is similar to a microprocessor, except that it has been optimized for use in applications involving network routing and packet processing. Abbreviated NPU. There is no standard architecture, but many network processors feature multiple RISC CPUs running in parallel. In this configuration, one central processor typically receives and handles network control packets while the others pass data packets through the system at network speeds.See also control plane, data plane.",
  },
  {
    term: "Nibble",
    definition:
      "A 4-bit chunk of data. Any byte consists of an upper nibble and a lower nibble. This is a convenient unit of data precisely because it can represent one of 16 values. A single hexadecimal digit (0 through F) can represent the nibble in a data dump.",
  },
  {
    term: "Nonmaskable Interrupt",
    definition:
      "An interrupt that cannot be disabled. Abbreviated NMI. Known as a trap (on some Intel processors), as a level 7 interrupt (Motorola), or by other names.",
  },
  {
    term: "NVRAM",
    definition:
      "A type of RAM that retains its data even when the system is powered down. Short for Non-Volatile Random Access Memory. NVRAM frequently consists of an SRAM and a long-life battery.",
  },
  {
    term: "Object Code",
    definition:
      "A set of processor-readable opcodes and data. The output of compilers and assemblers and the input and output of a linker are files containing object code. However, there are a variety of standardized and proprietary object file formats, meaning that development tools from one vendor can only rarely read the object code produced by those of another.",
  },
  {
    term: "Object File",
    definition:
      "A file containing object code; in particular, the output of a compiler or assembler. Most object files begin with a symbol table, which is followed by intermixed segments of code and data.",
  },
  {
    term: "On-chip Debug",
    definition:
      "A technology-agnostic name for the variety of techniques (like BDM) that include software debug capability within the processor hardware. Sometimes abbreviated OCD. The connection to the host-based debugger is generally over a standard JTAG port or a proprietary header.",
  },
  {
    term: "One-time Programmable",
    definition:
      "Describes any programmable device, like a PROM or a PLD, that can be programmed just once by the end user. Abbreviated OTP.",
  },
  {
    term: "Opcode",
    definition:
      "A binary value that is recognized by a processor as one of the instructions in its instruction set.",
  },
  {
    term: "Open Source",
    definition:
      "1.A vague term describing any software that comes with source code, no matter how its use is or is not restricted.\nUnfortunately, there is no clear definition for \"open source software\" and no standard license. Many companies are using the term open source these days, but in far different ways. Although the idea is similar to that of free software (you can generally still use, modify, and redistribute the software), there is far less emphasis on the right of the source code to be free.\n   2.Although not as true with respect to Linux, many open source companies seem to be unwilling to give up central control of their software. (Free software, on the other hand, has no owner.)\n   3.What's important about open source software, particularly for embedded systems developers, is that its licensing terms are more like LGPL than GPL. In other words, you are typically free to add your own proprietary software to the open source code and produce a proprietary result. The free software movement doesn't much like this but is otherwise more in alignment with the newer open source movement than in opposition to it.",
  },
  {
    term: "Operating System",
    definition:
      "A piece of software that makes multitasking possible. An operating system typically consists of a set of system calls and a periodic clock tick ISR. The operating system is responsible for deciding which process or thread should be using the processor at any given time and for controlling access to shared resources.",
  },
  {
    term: "Oscilloscope",
    definition:
      'A hardware debugging tool that allows you to view the voltage on one or more electrical signals. A "scope" for short. An embedded software developer might use an oscilloscope to determine whether a particular interrupt is currently asserted or to confirm the duty cycle of a PWM output.\nA two-channel digital oscilloscope from Agilent',
  },
  {
    term: "OTP",
    definition: "One-time Programmable.",
  },
  {
    term: "Parallel Processing",
    definition:
      "The capability to apply two or more processors to a single computation.",
  },
  {
    term: "Peripheral",
    definition:
      "A piece of hardware other than the processor, usually an I/O device. A peripheral can reside within the same chip as the processor; in which case, it can be called an integrated or on-chip peripheral.",
  },
  {
    term: "Physical Address",
    definition:
      "The address that is placed on the address bus when accessing a memory location or register.",
  },
  {
    term: "PIC",
    definition:
      "1. A member of any of several microcontroller families from Microchip, formally termed PICmicro microcontrollers.\n2.  Short for Position-Independent Code.",
  },
  {
    term: "PID",
    definition:
      "1.  A three-part technique for designing control systems that use feedback. Short for Proportional–Integral–Derivative. The individual proportional (to the current error), integral (of all past errors), and derivative (predictor) terms work in conjunction to drive the system to its desired state quickly and with only minor overshoot.\nPID controllers have been used for over a century in various mechanical, pneumatic, and electronic forms. A digital PID controller is implemented as firmware running on a processor.\n   2.  Process ID.",
  },
  {
    term: "PLD",
    definition: "programmable logic device.",
  },
  {
    term: "Polling",
    definition:
      "A method of interfacing to a peripheral that involves repeatedly reading a status register until the device has reached the awaited state. Device drivers are either polling or interrupt-driven, with the latter being more generally preferred.",
  },
  {
    term: "Preemptive",
    definition:
      "An operating system is said to be preemptive if it allows the running task to be suspended when a task of higher priority becomes ready (or a task of equal priority is granted a turn). Nonpreemptive schedulers are easier to implement but less appropriate for embedded systems, which must be responsive to external events.",
  },
  {
    term: "Priority",
    definition:
      "The relative urgency of one task or interrupt compared to another. In the case of tasks, the priority is an integer and the scheduler in a preemptive priority-based operating system compares the priorities of all that are ready to run and selects the one with the highest urgency to run.",
  },
  {
    term: "Priority Inversion",
    definition:
      "An unwanted software situation in which a high-priority task is delayed while waiting for access to a shared resource that is not even being used at the time. For all practical purposes, the priority of this task has been lowered during the delay period. Priority inversion arises when a medium-priority task preempts a lower priority task using a shared resource on which the higher priority task is pending.\n\n   Anytime you use a muex in a preemptive operating system environment, priority inversion is a possible result. A workaround, such as priority inheritance protocol, can be used to bound the length of this inversion but not eliminate it entirely.",
  },
  {
    term: "Process",
    definition:
      "1.  A word that is often confused with thread  The crucial distinction is that processes have their own private virtual memory spaces. One or more threads can run in the memory space of each process.\nProcesses are more common in multiuser systems than in embedded systems, where the added security and reliability outweigh the overhead costs.\n   2.  In the context of product development, a sequenced set of activities performed by a collaborating set of workers resulting in a coherent set of project artifacts, one of which is the desired system.",
  },
  {
    term: "Processor",
    definition:
      "A generic term that does not distinguish between microprocessor, microcontroller, network processor , or digital signal processor.",
  },
  {
    term: "Processor Family",
    definition:
      "A set of related processors, usually successive generations from the same manufacturer. For example, Intetel's 80x86 family began with the 8086 and now includes the 80186, 286, 386, 486, Pentium, and many others. The later models in a family are typically backward-compatible with the ones that came before.",
  },
  {
    term: "Processor-Independent",
    definition:
      "Said of a piece of software that is independent of the processor on which it will be run. Most programs that can be written in a high-level language are processor independent.",
  },
  {
    term: "Processor-Specific",
    definition:
      "A piece of software that is highly dependent on the processor on which it will be run. Such code must usually be written in assembly language. Poor design can make a high-level language program very processor specific; careless assumptions about the size of longs and ints in C, for example, or explicit accesses to memory that create a particularendianness limit portability.\nContrast with processor-independent.",
  },
  {
    term: "Profiler",
    definition:
      "A software development tool that collects and reports execution statistics for your programs. These statistics include the number of calls to each subroutine and the total amount of time spent within each. This data can be used to learn which subroutines are the most critical and, therefore, demand the greatest code efficiency. Unfortunately, such technology is not often available in the remote debugging environment typical of embedded systems development.\nprogram counter\ninstruction pointer.",
  },
  {
    term: "Programmable Logic Device",
    definition:
      'An integrated circuit that can be used to implement a digital logic design in hardware. Abbreviated PLD. PLDs require far less board area, power, and wiring than several equivalent 7400-series TTL parts. And their internal structure can be reprogrammed if the logic later changes. For these reasons, inexpensive programmable logic devices like PLAs (programmable logic arrays), PALs (programmable array logic), and GALs (generic array logic) are commonly used for address decoding and other "glue" logic on circuit boards. PLDs are not as large or as flexible as FPGAs',
  },
  {
    term: "PROM",
    definition:
      "A type of ROM that can be written (programmed) with a device programmer. Short for Programmable Read-Only Memory. These memory devices can be programmed only once, so they are sometimes referred to as write-once or one-time programmable.",
  },
  {
    term: "Protocol Stack",
    definition:
      "Any set of communication protocols, such as TCP/IP, that consists of two or more layers of software and hardware. It's called a stack because each layer builds on the functionality in the layer below.",
  },
  {
    term: "Pulse Width Modulation",
    definition:
      "1.A digital control technique wherein the processor adjusts the duty cycle of a sequence of fixed-width pulses. Abbreviated PWM. Unlike other modulation techniques, PWM is used more to control external analog signals or mechanical devices than to transmit data.\n2.Consider driving a motor: a simple analog approach is to bias a transistor by varying amounts to control the motor's speed. This is very inefficient because the transistor dissipates considerable amounts of heat. PWM offers an alternative: connect the same transistor to a digital output pin and control the duty cycle of a train of pulses. Now the transistor is either on or off, so there's little power (P = I2 × R) loss.\n3.Other applications abound. Passing the digital output through a lowpass filter converts the pulses to analog—the voltage a function of duty cycle. In effect, it's a cheap D/A converter.\n4.Many processors have built-in PWM controllers that generate the pulse stream for a programmable duty cycle.",
  },
  {
    term: "Quadrature Encoder",
    definition:
      "A type of rotary encoder. A mechanical device, the quadrature encoder produces two outputs 90 degrees out of phase. By counting transitions of these outputs, a computer can decode the shaft's position and its direction of motion.\nContrast with binary encoder, Gray code encoder.",
  },
  {
    term: "Quantum Programming",
    definition:
      "Any programming involving a quantum computer. Quantum computers are devices that compute using superpositions of quantum states. Small quantum computers have recently been built, and progress is continuing. It is widely suspected that if large-scale quantum computers can be built, they will be able to solve certain kinds of problems far faster than any classical computer.",
  },
  {
    term: "Race Condition",
    definition:
      "1.  A situation in which the combined effects of two or more programmatic threads (or a single thread and an ISR) varies depending on the precise order in which the instructions of each are executed.\nRace conditions can be eliminated by surrounding critical code sections that must be executed without interruption with a pair of mutex take and release system calls. To prevent race conditions involving ISRs, interrupts must be disabled for the duration of the critical section.\n   2. A situation in digital logic where timing errors cause erratic outputs.",
  },
  {
    term: "Random Access Memory",
    definition:
      "A broad classification of memory devices that includes all devices in which individual memory locations can be read or written in any order required by the application. Abbreviated RAM. Misused to mean memory that can be both read and written, but the term is so broadly (mis)used in this fashion that nearly everyone assumes random access is the same as read-write.",
  },
  {
    term: "Rate Monotonic Analysis",
    definition:
      "The process of analyzing a real-time system to assign individual thread priorities according to the rate monotonic algorithm.",
  },
  {
    term: "Read-only memory",
    definition:
      "1.A broad classification of memory devices that includes all devices in which memory locations cannot be modified. Abbreviated ROM. Misused to mean any nonvolatile memory, including flash and EEPROM, that can be modified in-system.\n   2.Random access memory.",
  },
  {
    term: "Real-time Operating System",
    definition:
      "An operating system designed specifically for use in real-time systems. Abbreviated RTOS.",
  },
  {
    term: "Real-time System",
    definition:
      'Any computer system, embedded or otherwise, that has timeliness requirements. The following question can be used to distinguish real-time systems from the rest: "Is a late answer as bad, or even worse, than a wrong answer?" In other words, what happens if the computation doesn\'t finish in time? If nothing bad happens, it\'s not a real-time system. If someone dies or the mission fails, it\'s generally considered "hard" real-time, which is meant to imply that the system has hard deadlines. Everything in between is "soft" real-time.',
  },
  {
    term: "Recursive",
    definition:
      "Said of software that calls itself. Recursion should generally be avoided in an embedded system, since it frequently requires a large stack.",
  },
  {
    term: "Reentrant",
    definition:
      "Said of software that can be executed multiple times simultaneously. A reentrant function can be safely called recursively or from multiple tasks. The key to making code reentrant is to ensure mutual exclusion whenever accessing global variables or shared registers.",
  },
  {
    term: "Register",
    definition:
      "A memory-like location that is part of a processor or an I/O device. The reference to the register is encoded as part of the instruction, not as a discrete address. A processor register is much faster to read or write than a location in memory. Generally, each bit or set of bits within a peripheral register controls or tracks some behavior of the larger device.",
  },
  {
    term: "Relocatable",
    definition:
      "A file containing object code that is almost ready for execution on the target. The final remaining step is to use a locator or loader to fix the remaining relocatable addresses within the code. The result of that process is an executable.",
  },
  {
    term: "Reset Address",
    definition:
      "The address from which the first instruction will be fetched after a processor is powered on or reset; usually in ROM.",
  },
  {
    term: "Reset Code",
    definition:
      'A small piece of code that is placed at the reset address  The reset code is usually written in assembly language and might simply be the equivalent of "jump to the startup code."',
  },
  {
    term: "Reset Vector",
    definition: "reset address.",
  },
  {
    term: "Resistance Temperature Detector",
    definition:
      "A temperature-sensitive wire, often made of copper, nickel, or platinum, that's used to measure temperature. Abbreviated RTD. An RTD can be constructed on a ceramic part. Common RTD materials are copper, platinum, or nickel.",
  },
  {
    term: "RMA",
    definition: "1. rate monotonic algorithm.\n2. rate monotonic analysis.",
  },
  {
    term: "ROM Emulator",
    definition:
      "1.A debugging tool that plugs into the target system's ROM sockets (or that attaches to the SMT ROM parts). ROM emulators link the target system to a host computer. A plug either inserts into the target ROM sockets, clips over SMT ROM chips, or is soldered down in place of the ROM parts. The emulator then links this connection to the host computer over RS-232, Ethernet, or USB.\n2.A ROM emulator lets the developer examine and change memory, I/O, and registers. It will support breakpoints (usually software-only), and single stepping. The biggest advantage of a ROM emulator is that it doesn't require a dedicated target comm port, as a ROM monitor would.\n3.ROM monitor\n4.Debug monitor.",
  },
  {
    term: "Scheduler",
    definition:
      "The part of an operating system that decides which task  to run next. The scheduler's decision is based on the state of each task, the relative priorities of those that are ready to run, and the specific scheduling algorithm implemented.",
  },
  {
    term: "Semaphore",
    definition:
      "A data structure that is used for intertask synchronization. Semaphores are usually provided by the operating system and come in two types: binary and counting. The former can be used for mutual exclusion.",
  },
  {
    term: "Simulator",
    definition:
      "A debugging tool that runs on the host and pretends to be the target processor. A simulator can be used to test pieces of the embedded software before the embedded hardware is available. Unfortunately, attempts to simulate interactions with complex peripherals are often more trouble than they are worth.",
  },
  {
    term: "Software Flow Control",
    definition:
      "A flow control technique that uses in-band signaling. When a receiver in a bidirectional Communications channel is no longer able to process or buffer incoming data, it transmits a special character request to the sender to pause the flow. When it is capable of again receiving new data, it then transmits a different character to the sender to resume the flow.",
  },
  {
    term: "Software Interrupt",
    definition:
      "An interruption of a program that is initiated by a software instruction. Software interrupts are commonly used to implement breakpoints and operating system entry points. Unlike trueinterrupts, they occur synchronously with respect to program execution; that is, software interrupts always occur at the beginning of an instruction execution cycle.",
  },
  {
    term: "SPI",
    definition:
      "An inexpensive bus for chip interconnection that is popular on circuit boards. Short for Serial Peripheral Interface.",
  },
  {
    term: "SRAM",
    definition:
      "A type of RAM that retains its contents as long as the system is powered on. Short for Static Random Access Memory. Data stored in SRAM is lost when the system is powered down or reset.",
  },
  {
    term: "Stack",
    definition:
      "1.  A list in which elements are always added and removed from the (conceptual) end. A last-in, first-out queue. Stacks are one of the four basic kinds of queues or lists. They are used most frequently to keep track of hierarchically nested processes. They are common in both application- and system-level software. Any processor that implements a call instruction must also support some kind of hardware stack (the run-time stack). Compilers rely on the run-time stack to support function calls and argument passing.\n   2. The run-time stack associated with a particular thread. In most operating systems (SSX, SST, and Erika are exceptions), each thread requires a separate stack area. When a context switch occurs, the current stack pointer is saved as part of the old thread's context; the stack pointer of the new thread is then restored, thus making that stack active again.",
  },
  {
    term: "Stack Frame",
    definition:
      "An area of the stack associated with a particular function call.",
  },
  {
    term: "Startup Code",
    definition:
      "A piece of assembly language code that prepares the way for software written in a high_level_language. Most cross-compilers come with startup code that you can modify, compile, and link with your embedded programs. Startup code usually initializes code and data segments, safes I/O, and sets up chip selects and wait states.",
  },
  {
    term: "Target",
    definition:
      "1.The embedded system under development.\n   2.This term is never used to describe a finished product. During development, the embedded system (for which the software is being developed) is normally called the target to distinguish it from the host system (where the software is being developed). This distinction is necessary, in part, because the host might also be capable of executing the software under development—either directly or in a simulator.",
  },
  {
    term: "Task",
    definition:
      "1.  The central abstraction of a real-time operating system. Each task must maintain its own copy of the CPU's instruction pointer and general-purpose registers. Unlike processes, tasks share a common memory space and so programmers must be careful to avoid overwriting other task's code, data, and stack.\n   2.. Any individual computation, set of computations, decision-making logic, or combination thereof that must be performed at run-time by software. When using an RTOS, each task to be completed may be assigned to an individual executable task. This often makes system decomposition and code maintenance easier.",
  },
  {
    term: "Thermistor",
    definition:
      "A type of sensor used to measure temperature that is essentially a temperature-sensitive resistor. In conjunction with a reference voltage, an op-amp, and an analog-to-digital converter, a thermistor can be used to measure temperatures digitally.",
  },
  {
    term: "Thermocouple",
    definition:
      "An electronic component used to sense temperature. A temperature-sensitive junction of two dissimilar materials produces a small voltage (typically 50 µV/°C).",
  },
  {
    term: "Thread",
    definition:
      "Another name for a task. This name is more common in operating systems that supportprocesses. A task is simply a thread in a single-process system.",
  },
  {
    term: "Timer",
    definition:
      "A peripheral that measures elapsed time, typically by counting processor cycles or clocks. Compare to counter. See also input capture timer, counter/timer.",
  },
  {
    term: "Tracepoint",
    definition:
      "Like a breakpoint except that, rather than stopping the program, a counter is incremented. Tracepoints are not supported by all debugging tools.",
  },
  {
    term: "Trap",
    definition:
      "An interruption of a program that is triggered by the processor own internal hardware. For example, the processor might trap if an illegal opcode is found within the program.",
  },
  {
    term: "UClinux",
    definition:
      "A variant of the popular Linux kernel designed for use in systems without a memory management unit. Despite the absence of an MMU, uClinux provides complete and stable support for multitasking, along with a TCP/IP stack, support for popular filesystems such as ext2, NFS, and FAT, and the familiar Linux API.",
  },
  {
    term: "Unidirectional",
    definition:
      "A one-way flow of information, as in some communications channels.",
  },
  {
    term: "Unified Modeling Language",
    definition:
      "A standardized visual notation for communication about system specifications and design details. Abbreviated UML.",
  },
  {
    term: "Uninitialized Data",
    definition:
      "Static variables that have no initial value assigned to them. Uninitialized data is generally located in the bss segment.",
  },
  {
    term: "Universal Serial Bus",
    definition:
      'A serial protocol and physical link that transmits all data differentially on a single pair of wires. Abbreviated USB. USB is an increasingly popular replacement for slower serial and parallel ports, especially for connecting to general-purpose computers.\n   The USB 1.0 standard specifies two kinds of cables and two variations of connectors. High-speed cables, for 12 Mbps communication, are better shielded than their less expensive 1.5 Mbps counterparts. Each cable has an "A" connector on one end and a "B" on the other. Since the two types are physically different it\'s impossible to install a cable incorrectly.',
  },
  {
    term: "Up Counter",
    definition: "A counter that counts up from zero toward its maximum value.",
  },
  {
    term: "User Mode",
    definition:
      "A state in which a processor will not execute some of its instructions. For example, while in user mode, it might not be possible to disable interrupts.",
  },
  {
    term: "Via",
    definition:
      "A copper trace that connects signals on two or more layers of a PCB.",
  },
  {
    term: "Void",
    definition:
      "res. Having no defined type. In function prototypes and definitions, C's void keyword is used to indicate the lack of a return value or parameters. In pointer creation and manipulation, it asks the compiler to forgo all possible knowledge of the type of data pointed to.",
  },
  {
    term: "Volatile",
    definition:
      "A C keyword that should be used to warn your compiler (particularly the optimizer) about any pointers that point to registers with volatile values. This will ensure that the actual value is reread each time the data is used.",
  },
  {
    term: "Volatile",
    definition:
      "Said of a value that can change without the intervention of software. For example, values within the registers of some I/O devices might change in response to external events. Similarly, the contents of global variables that are shared by two or more tasks or a task and an ISR can be considered volatile.",
  },
  {
    term: "Volt",
    definition:
      "A standard unit of electromotive force. Abbreviated V. One volt is the electrical force between two points for which 1 ampere of current will do 1 joule of work.",
  },
  {
    term: "Voltage-Controlled Oscillator",
    definition:
      "An oscillator with an output frequency that is a function of an input voltage. Abbreviated VCO. VCOs are very useful for transforming analog data to digital and then transmitting the signal over a single wire.",
  },
  {
    term: "VxWorks",
    definition:
      "A commercial real-time operating system from Wind River Systems.",
  },
  {
    term: "Walking 1s test",
    definition:
      "A memory test that involves moving a 1 bit through a byte or word to systematically confirm each bit can hold a 1 value. All of the other bits are set to 0 during the test. See also checkerboard test.",
  },
  {
    term: "Watchdog Timer",
    definition:
      "A fail-safe mechanism that intervenes if a system stops functioning. Abbreviated WDT. A hardware timer that is periodically reset by software. If the software crashes or hangs, the watchdog timer will expire, and the entire system will be reset automatically.",
  },
  {
    term: "Watchpoint",
    definition:
      "Like a breakpoint, but in the data area of memory rather than the code area. Any access to this location with the specified access type (read, write, read/write) stops execution and switches control to the debugger. Hardware support is required for realization of watchpoints. Watchpoints are not supported by all debugging tools.",
  },
  {
    term: "Well-known Port Numbers",
    definition:
      "TCP and UDP port numbers 0 through 1023, which are reserved for standardized protocols, such as FTP, telnet, HTTP, and others.",
  },
  {
    term: "Wind River Systems",
    definition:
      "The company that developed the VxWorks real-time operating system. Sometimes just Wind River or abbreviated WRS been the dominant player in the RTOS marketplace. In a 2002 survey of Embedded Systems Programming subscribers, about 60% of those reporting they used a commercial RTOS in the past year had used one of Wind River's products.",
  },
  {
    term: "Windows CE",
    definition:
      "An embeddable variant of Microsoft's Windows operating systems. Abbreviated WinCE. Originally lacking real-time capabilities and still quite large (8 MiB flash, minimum), WinCE has not yet taken off in the embedded space as Microsoft had hoped (and many RTOS vendors feared).",
  },
  {
    term: "X-Acto knife",
    definition:
      "A small, razor-sharp knife with a disposable blade used (in electronics) to remove solder bridges between IC pins, clean up PCB tracks, and trim fingernails. The X-Acto knife is part of the universal troubleshooting kit needed by every developer. Other components include duct tape, 10-kO resistors, and Super Glue.",
  },
  {
    term: "Xilinx",
    definition:
      "The world's leading provider of programmable logic devices with 50% of the market in 2002. Founded in 1984, Xilinx pioneered the FPGA and now also sells a line ofCPLDs . Listed by Fortune Magazine in 2001 and 2002 as one of the best 100 companies to work for.",
  },
  {
    term: "XOFF",
    definition:
      "A special character transmitted in-band to request a resumption of a previously paused flow of incoming data. ASCII 0x13. See also XON, software flow control.",
  },
  {
    term: "XON",
    definition:
      "A special character transmitted in-band to request a pause in the flow of incoming data. ASCII 0x11.\n   Note that because the XON character is sent in the communications channel, binary data sent across the channel must be stripped of all 0x11s. This is typically done by inserting an escape code before the binary data's 0x11 is sent so that the device on the other end will know not to interpret that next byte as an XON. See also XOFF, software flow control.",
  },
  {
    term: "Y2K",
    definition:
      "A predicted dramatic global embedded systems failure that never materialized. Short for Year 2000. Most embedded systems programmers correctly understood that the designers of elevators and sewer level monitors do not go to the trouble of including a calendar or of comparing dates and that, if they do, this date information is typically used only for event logging and not actual decision making.\n   Many Chicken Little outsiders, however, correctly grokking both the Y2K database problem lingering in legacy COBOL programs run by large private and government institutions and the increasing ubiquity of processors at the heart of almost everything that plugs into the wall or eats batteries, predicted a virtual doomsday, bought gold ingots or generators, and filled their bathtubs with water in anticipation of the nonevent of the century.",
  },
  {
    term: "Yacc",
    definition:
      "A tool for generating C or C++ code for a parser. Short for Yet Another Compiler Compiler. Once an stream of data has been converted into tokens by a lexical scanner, such as lex, the relationship between those tokens needs to be established. The possible token orders for a language is called its grammar. Yacc is a command-line tool that accepts a grammar description (in a text file) as input and generates the code for a parser for that grammar as output. Parsers are useful in many systems other than just compilers, such as for reading the contents of a configuration file stored in a system's flash memory.",
  },
  {
    term: "Yield",
    definition:
      "1.  To offer use of the processor to another thread that is ready to run.\n   2.  The percentage of good die on a wafer. IC vendors test each die, with the sure knowledge that some percentage of them will not pass. Mature manufacturing processes with smaller chips give high yields; very dense parts or those made with new processes could result in yields less than 50%.",
  },
  {
    term: "zero",
    definition:
      "1.  logic 0.\n   2.  A processor flag indicating whether the previous instruction resulted in a zero result.\n   3. To set something (a bit or signal) to 0.",
  },
  {
    term: "ZIF Socket",
    definition:
      "An IC socket that is designed for ease of chip insertion and removal. Short for Zero Insertion Force.",
  },
];
