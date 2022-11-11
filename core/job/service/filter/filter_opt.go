package filter

const (
	bitOnProjectName         uint64 = 0
	bitOnJobName             uint64 = 0 << 1
	bitOnResourceDestination uint64 = 0 << 2
)

// Operand
type Operand uint64

const (
	ProjectName         = Operand(bitOnProjectName)
	JobName             = Operand(bitOnJobName)
	ResourceDestination = Operand(bitOnResourceDestination)
)

func With(operand Operand, value string) FilterOpt {
	return func(f *filter) {
		if value != "" {
			f.bits |= uint64(operand)
			f.value[operand] = value
		}
	}
}
