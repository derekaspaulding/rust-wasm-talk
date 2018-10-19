const rust_lib = import('./hello_world');

rust_lib.then(({ greet }) => {
	greet('World!');
});
