function Grid({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {children}
        </div>
    );
}

export default Grid;